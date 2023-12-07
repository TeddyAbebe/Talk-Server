const userRoutes = require("./UserRoutes");

module.exports = function (app) {
  //   User Route
  app.use("/api/user", userRoutes);
};
