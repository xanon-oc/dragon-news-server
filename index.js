const express = require("express");
const app = express();
const port = process.env.PORT || 5200;

const news = require("../dragon-server/data/newses.json");
const category = require("../dragon-server/data/categories.json");

app.get("/", (req, res) => {
  res.send("news are here mama");
});
app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/category", (req, res) => {
  res.send(category);
});

app.listen(port, () => {
  console.log(`The server is running on port : ${port}`);
});
