const express = require("express");
const { getPage, handleData } = require("./../controllers/userController");
const router = express.Router();
router.route("/login").get(getPage).post(handleData);
module.exports = router;
