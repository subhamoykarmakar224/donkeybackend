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

app.post("/add/data", jsonParser, (req, res) => {
  console.log("Data :: " + req.body);
  console.log("Device ID :: " + req.body.deviceid);
  console.log("Packet ID :: " + req.body.packetid);
  console.log("TimeStamp :: " + req.body.timestamp);
  console.log("Delivery Type :: " + req.body.delivery_type);
  console.log("First Packet :: " + req.body.first_packet);
  console.log("Longitude :: " + req.body.payload.lon);
  console.log("Latitude :: " + req.body.payload.lat);
  console.log("---------------------------------");
});



// start the Express server
app.listen(port, () => {
  console.log(`Server Started...`);
});
