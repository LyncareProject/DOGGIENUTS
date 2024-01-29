const express = require("express");

const router = express.Router();

const controller = require("../controllers/email.controller");

router.post("/email", controller.postEmail);

module.exports = router;
