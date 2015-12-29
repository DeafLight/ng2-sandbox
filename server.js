"use strict";
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var heroes_1 = require('./routes/heroes');
var appConfig_1 = require('./appConfig');
mongoose.connect(appConfig_1.appConfig.dbConnString);
var app = express();
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
var server = app.listen(appConfig_1.appConfig.port, appConfig_1.appConfig.hostName, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
//# sourceMappingURL=server.js.map