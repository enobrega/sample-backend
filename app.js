const express = require("express");
const userController = require("./controllers/userController");
const { removeAllListeners } = require("nodemon");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

users = ["eduardo", "bruno"];

app.get("/", function (req, res) {
  res.status(200).send("Hello World!");
});

app.get("/users", function (req, res) {
  res.status(200).send(`<h1><strong>${users[0]}<br>${users[1]}</strong></h1>`);
});

app.post("/users/login", function (req, res) {
  userController.login(req, res);
});
const port = 3000;

app.listen(port || 3000, function () {
  console.log(`Server started. Listening on port ${port}!`);
});
