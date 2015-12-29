"use strict";
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var heroes_1 = require('./routes/heroes');
mongoose.connect('mongodb://localhost/ng2-sandbox');
var app = express();
var db = mongoose.connection;
// view engine setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
var router = express.Router();
router.use(function (req, res, next) {
    // always called
    next();
});
heroes_1.routeHeroes(router);
app.use('/api', router);
var server = app.listen(3000, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
//# sourceMappingURL=server.js.map