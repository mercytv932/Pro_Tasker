const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
// Create signToken function

function signToken(user) {
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

const userSignUp = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const token = signToken(user);
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: "Registration failed" });
  }
};
