const express = require("express");
const router = express.Router();
const { userSignUp, userLogin } = require("../controllers/auth.js");

router.post("/register", userSignUp);
router.post("/login", userLogin);

module.exports = router;
