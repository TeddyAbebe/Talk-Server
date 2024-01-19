const userRoutes = require("./UserRoutes");
const chatRoutes = require("./ChatRoutes");
const messageRoutes = require("./MessageRoutes");

module.exports = function (app) {
  // User Route
  app.use("/api/user", userRoutes);

  // Chats Route
  app.use("/api/chat", chatRoutes);

  // Message Route
  app.use("/api/message", messageRoutes);
};
