const express = require("express");
const app = express();
const cors = require('cors');

const port = 3000;
const path = require("path");
const { allQuotes } = require("./taylorquotes");
app.use(express.static("views"));


app.use(cors());

function getRandomElementFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}



function getFilteredQuotes(req) {

  return allQuotes;
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/get", (req, res) => {
    res.send(getRandomElementFrom(getFilteredQuotes(req)));
  });

app.listen(process.env.PORT || port, function () {
  console.log(
    `Express server listening on port ${this.address().port} in ${
      app.settings.env
    } mode`
  );
});