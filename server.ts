var express = require('express');
var path = require('path');
var app = express();
// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
var server = app.listen(3000, function() {
  var host = 'localhost';
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
module.exports = app;
