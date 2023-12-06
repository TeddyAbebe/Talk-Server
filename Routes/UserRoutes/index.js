const express = require("express");
const router = express.Router();
const { registerUser } = require("../../Controllers/UserControllers");

router.route("/").post(registerUser);
// router.route("/login", authUser)

module.exports = router;
