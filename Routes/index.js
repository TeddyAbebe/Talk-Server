const userRoutes = require("./UserRoutes");
const chatRoutes = require("./ChatRoutes");

module.exports = function (app) {
  // User Route
  app.use("/api/user", userRoutes);

  // Chats Route
  app.use("/api/chat", chatRoutes);
};
