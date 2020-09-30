//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
  });

app.post('/', function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmiResult = Math.floor(weight / (height * height));

    res.send("Your BMI is " + bmiResult +".");
});

app.listen(port, function() {
  console.log(`Server is running at http://localhost:${port}`)
});

