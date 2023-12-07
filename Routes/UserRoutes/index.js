const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
} = require("../../Controllers/UserControllers");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
