const express = require("express");
const router = express.Router();
const { userSignUp, userLogin, userLogout } = require("../controllers/auth.js");

router.post("/register", userSignUp);
router.post("/login", userLogin);
router.post("/logout", userLogout);

module.exports = router;
