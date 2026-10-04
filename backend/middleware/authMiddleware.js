const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access is denied, no token provided." });
  }

  try {
    const decoded = jwt.verify(token, secret); //verify token by using the secret key.
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = authentication;
