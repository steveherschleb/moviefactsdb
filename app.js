require('node-jsx').install({ harmony: true }); 

var fs = require('fs');
var express = require('express');

var app = express();
var port = process.env.PORT || 3002;

// Bootstrap application settings
require('./config/express')(app);

// Bootstrap models
fs.readdirSync(__dirname + '/models').forEach(function (file) {
  'use strict';

  if (file.substr(-3) === '.js') { require(__dirname + '/models/' + file); }
});

// Bootstrap routes
require('./config/routes')(app);

app.listen(port);
console.log('Express app started on port ' + port);

module.exports = app;
