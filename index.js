const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/user/:username", (req, res) => {
  let data = {
    username: req.params.username,
    hobbies: ["Footbal", "WoT", "FoE"],
  };
  res.render(`user`, data);
});
const PORT = 3001;
app.listen(3001, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
