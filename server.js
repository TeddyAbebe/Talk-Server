const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const { notFound, errorHandler } = require("./Middlewares/errorMiddleware");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  pingTimeout: 60000,
  cors: {
    // origin: "http://localhost:3000",
    origin: "https://ta-lk.netlify.app",
  },
});

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

require("./Middlewares/express")(app);
require("./Routes")(app);

// Socket configuration

io.on("connection", (socket) => {
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageReceived) => {
    let chat = newMessageReceived.chat;

    if (!chat.users) return console.log("Chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageReceived.sender._id) return;

      socket.in(user._id).emit("Message Received", newMessageReceived);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

function listen() {
  server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
  });
}
// Connect to Database
connectDB().then(listen);
