//jshint esversion:6
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

//Calculator
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
  });

app.post('/', function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result of the Calculation is " + result + ".");
});

//BMI Calculator
app.get('/bmiCalculator', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator', function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmiResult = Math.floor(weight / (height * height));
    res.send("Your BMI is " + bmiResult + ".");
});

//Server Notice
app.listen(port, function() {
  console.log(`Server is running at http://localhost:${port}`)
});
