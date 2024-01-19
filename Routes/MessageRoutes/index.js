const express = require("express");
const { protect } = require("../../Middlewares/authMiddleware");
const { sendMessage, allMessages } = require("../../Controllers/Messages");

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
