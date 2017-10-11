// Requiring necessary packages
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var db = require('mongodb');
var mongoose = require('mongoose');

var PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Requiring our routes
require('./routes/html-routes.js')(app);
// require('./routes/api-routes.js')(app);

// Syncing our database and logging a message to the user upon success
app.listen(PORT, function() {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});