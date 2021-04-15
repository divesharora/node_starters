const express = require("express");
const router = express.Router();

const auth = require("../handlers/auth");

//signup
router.post("/signup", auth.signup);

//login
router.post("/login", auth.login);

module.exports = router;
