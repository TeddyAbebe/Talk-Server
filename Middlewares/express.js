const cors = require("cors");
const express = require("express");

module.exports = function (app) {
  // Middlewares
  app.use(cors());
  app.use(express.json());
};
