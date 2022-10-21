const express = require("express");
const app = express();
const logger = require("./14-logger");
//req => Middleware =>res

app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.listen(5000, () => {
  console.log("Server Listening on port 5000...");
});
