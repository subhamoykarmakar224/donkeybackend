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
  host: "http://128.195.52.69",    // ip address of server running mysql
  user: "root",    // user name to your mysql database
  password: "cdcju", // corresponding password
  database: "donkey" // use the specified database
});

con.connect();

// define a default route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/add/data", jsonParser, (req, res) => {
  var data = JSON.stringify(req.body);
  con.query("insert into data (record) values ("+ data +")", function (err, rows, fields) {
    if (err) {
      res.sendStatus(403);
      throw err;
    }
    console.log('The solution is: ', rows[0].solution)
    res.sendStatus(200);
  });
});



// start the Express server
app.listen(port, () => {
  console.log(`Server Started...`);
});
