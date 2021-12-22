const express = require("express");
const {getLogin, login, getSignup, getActivate, signup} = require("../controllers/authController");
const router = express.Router();
// middleware for redirect to register :
router.route("/login").get(getLogin).post(login);
router.route("/register").get(getSignup).post(signup);
router.route("/activate").get(getActivate);
module.exports = router;
