const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../../Controllers/UserControllers");

router.route("/").post(registerUser).get(allUsers)
router.route("/login").post(loginUser);

module.exports = router;
