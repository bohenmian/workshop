const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const app = express();

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.get("/", (req, res) => {
  res.send("Hello Docker!");
});

app.listen(8000, () => {
  console.log("Dockerizable app listening to connections!");
});
