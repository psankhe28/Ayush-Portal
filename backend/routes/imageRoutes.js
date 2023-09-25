const express = require("express");
const {
  generateImage
} = require("../controllers");
const { protect } = require("../middleware");

const router = express.Router();

router.route("/").post(protect, generateImage); 

module.exports = router;
