const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
var http = require("http").Server(app);
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(express.json());
const {APP_PORT} =require('./config')
const path = require("path");
var logger = require("morgan");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(logger("dev"));


// Database connection start
mongoose
  .connect(
    "mongodb://0.0.0.0:27017/invoice-system",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    }
  )
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
// Database connection end


// Routes start
app.use("/api/v1/modules", require("./Modules"));

// Routes end

app.get("/", (req, res) => {
  res.send("Server is Ok!...");
});

http.listen(APP_PORT, () => {
  console.log(`HTTP Server is running ${APP_PORT}`);
});

