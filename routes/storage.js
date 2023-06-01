const express = require("express");
const router = express.Router();
const { createItem, getItems } = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");

router.get("/", getItems);
router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
