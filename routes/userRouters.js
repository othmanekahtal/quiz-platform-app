const express = require("express");
const { handleData } = require("./../controllers/userController");
const router = express.Router();
router.route('').post(handleData);
module.exports = router;
