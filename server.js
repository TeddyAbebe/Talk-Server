const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const { notFound, errorHandler } = require("./Middlewares/errorMiddleware");

const app = express();
dotenv.config();

require("./Middlewares/express")(app);
require("./Routes")(app);

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
function listen() {
  app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
}

// Connect to Database
connectDB().then(listen);
