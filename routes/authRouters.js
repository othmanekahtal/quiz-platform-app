const express = require("express");
const {getLogin, login, getSignup, getActivate, signup} = require("../controllers/authController");
const {Auth} = require('./../middlewares/routes/authMiddleware')
const router = express.Router();
router.route("/login").get(Auth,getLogin).post(Auth,login);
router.route("/register").get(Auth,getSignup).post(Auth,signup);
router.route("/activate").get(Auth,getActivate);
module.exports = router;
