const express = require("express");
var bodyParser = require('body-parser');
var mysql = require('mysql');


const app = express();
const port = 8080;

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var con = mysql.createConnection({
  // host: "http://128.195.52.69/",    // ip address of server running mysql
  host: "localhost",    // ip address of server running mysql
  user: "subhamoy",    // user name to your mysql database
  password: "password", // corresponding password
  database: "donkey" // use the specified database
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// define a default route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/add/data", jsonParser, (req, res) => {
  var data = JSON.stringify(req.body);
  console.log("Insert: " + data);
  con.query("insert into data (record) values ('"+ data +"')", function (err, result) {
    if (err) {
      res.sendStatus(403);
      throw err;
    }
    console.log('DONE: Inserted: ', result);
    res.sendStatus(200);
  });
});



// start the Express server
app.listen(port, () => {
  console.log(`Server Started...`);
});
