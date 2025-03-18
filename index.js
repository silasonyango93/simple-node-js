/*SON/2018-11-06 00:29 - DEVELOPMENT

This is the system's entry point.It creates
the database connection and port binding 
then initializes all the route files.

*/

const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
var fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/" });
var dbcredentials;
var cors = require("cors");
var port = process.env.PORT || 5001;

app.use(cors());
dbcredentials = {
  host: "localhost",
  user: "root",
  password: "*Database630803240081",
  database: "ndma_dews",
  insecureAuth: true
};

app.use(express.static("public"));

var con;
app.use((req, res, next) => {
  con = mysql.createConnection(dbcredentials);
  con.on("error", err => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log(err);
    } else {
      //throw err;
    }
  });

  var date = new Date();
  date.setHours(date.getHours() + 0);
  console.log("Client connected at :-  "+date);

  next();
});



/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Session Managements*/

app.use(require("./controller/HhaController"));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const server = app.listen(5001, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Backend system listening at http://${host}:${port}`);
});
