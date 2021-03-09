const express = require("express");
var bodyParser = require('body-parser');

const app = express();
const port = 8080;

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// define a default route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/add/device", jsonParser, (req, res) => {
  console.log("<<< ---- NEW DEVICE ---- >>>");
  console.log("ID :: " + req.body.did);
  console.log("Name :: " + req.body.name);
  console.log("DateTime :: " + req.body.dateTime);
  console.log("---------------------------------");
});

app.post("/add/data", jsonParser, (req, res) => {
  console.log("<<< ---- NEW DEVICE ---- >>>");
  console.log("ID :: " + req.body.sid);
  console.log("Name :: " + req.body.name);
  console.log("phone :: " + req.body.phone);
  console.log("---------------------------------");
});



// start the Express server
app.listen(port, () => {
  console.log(`Server Started...`);
});
