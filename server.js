"use strict";
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var heroModel_1 = require('./models/heroModel');
mongoose.connect('mongodb://localhost/ng2-sandbox');
var app = express();
var db = mongoose.connection;
heroModel_1.HeroModel.find({}).exec().then(function (res) { return console.log(res); });
// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
var server = app.listen(3000, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
//# sourceMappingURL=server.js.map