const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

// Create signToken function
function signToken(user) {
  if (!process.env.JWT_SECRET) {
    throw new Error("secret key is missing or can't be accessed");
  }
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
    },

    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );
}

// User signUp
const userSignUp = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const token = signToken(user);
    res.status(201).json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: " Failed to create account" });
  }
};

// User login
const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Can't find the user" });
    }

    const correctPassword = await user.isCorrectPassword(req.body.password);
    if (!correctPassword) {
      return res.status(400).json({ message: "Wrong password!" });
    }

    //If all fields correct, create a token
    const token = signToken(user);
    res.status(200).json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to login" });
  }
};

module.exports = { userSignUp, userLogin };
