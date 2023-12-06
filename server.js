const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");

const app = express();
dotenv.config();

require("./Config/express")(app);
require("./Routes")(app);

const PORT = process.env.PORT || 5000;
function listen() {
  app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
}

// Connect to Database
connectDB().then(listen);
