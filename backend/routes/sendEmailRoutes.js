const express = require("express");
const sendEmailController = require("../controllers/sendEmail");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

//post route
router.post("/invoice", upload.single("pdf"), (req, res) => {
  sendEmailController.invoice(req, res);
});

module.exports = router;
