const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const numeral = require("numeral");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}))

// const number = 1000000;

// const formattedNumber = numeral(number).format('0,0');

// console.log(formattedNumber);

app.listen(3000, () => {
  console.log("Server has started on port 3000.");
})

// Route handlers
app.route("/")
.get((req, res) => {
  res.render("index");
})