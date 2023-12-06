const userRoutes = require("./UserRoutes");

module.exports = function (app) {
  // Home Route
  app.get("/", (req, res) => {
    res.send("API is running...");
  });

  //   User Route
  app.use("/api/user", userRoutes);
};
