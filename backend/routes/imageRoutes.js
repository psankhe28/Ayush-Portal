const express = require("express");
const {
  generateImage,
} = require("../controllers");
const { protect } = require("../middleware");

const router = express.Router();

// Only logged in user can access the below routes
router.route("/").post(protect, generateImage); 

module.exports = router;
