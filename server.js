const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentyear", () => new Date().getFullYear());

app.use((req, res, next) => {
  const log = `${new Date().toString()} : ${req.method} ${req.url}`;
  fs.appendFileSync("server.log", log + "\n");
  next();
});

app.use((req, res) => {
  res.render("maintenance.hbs");
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    author: "Lee"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    author: "Lee"
  });
});
app.listen(3000, () => {
  // console.log("server is up and running");
});
