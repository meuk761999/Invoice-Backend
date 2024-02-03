const express = require("express");
const Router = express.Router();
Router.use("/blogs", require('./blogs'))
Router.use("/users", require('./users'))

module.exports = Router;
