const express = require("express");

//initialize the app object
const app = express();

app.get("/", function (req, res) {
  res.send("Hello world");
});

//WILDCARD ERROR
app.get("*", (req, res) => {
  res.send("404");
});

app.listen(3000);
