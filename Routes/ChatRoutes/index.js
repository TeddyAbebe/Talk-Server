const express = require("express");
const { protect } = require("../../Middlewares/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../../Controllers/Chat");

const router = express.Router();

// Routes
router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup );
router.route("/group-add").put(protect, addToGroup);
router.route("/group-remove").put(protect, removeFromGroup);

module.exports = router;
