const express = require("express");
const { promptMessage } = require("../controllers");

const router = express.Router();
router.route("/").post(promptMessage);

module.exports = router;
