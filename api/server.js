const express = require("express");
const { Users } = require("./users");
const cors = require("cors");

const app = express();

app.use(cors());

const keys = ["first_name", "last_name", "email"];

app.get("/", (req, res) => {
  const { q } = req.query;
  const searchResults = Users.filter((user) => {
    return keys.some((key) => user[key].toLowerCase().includes(q));
  });
  res.send(searchResults.splice(0, 10));
});

app.listen(8000);
