const express = require("express");
const router = express.Router();
const { registerUser, loginUser, allUsers } = require("../../Controllers/User");
const { protect } = require("../../Middlewares/authMiddleware");

// Routes
router.route("/").post(registerUser).get(protect, allUsers);
router.route("/login").post(loginUser);

module.exports = router;
