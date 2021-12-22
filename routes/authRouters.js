const express = require("express");
const { getPage, login } = require("../controllers/authController");
const router = express.Router();
router.route("/login").get(getPage).post(login);
module.exports = router;
