const express = require("express");
const app = express();
const port = 8080;

// define a default route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  console.log(`Server Started...`);
});
