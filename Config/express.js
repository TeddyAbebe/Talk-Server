const cors = require("cors");

module.exports = function (app) {
  // Middlewares
  app.use(cors());
};
