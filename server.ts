import * as http from 'http';
import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import {HeroModel} from './models/heroModel';

mongoose.connect('mongodb://localhost/ng2-sandbox');

var app: express.Express = express();

var db = mongoose.connection;

HeroModel.find({}).exec().then((res) => console.log(res));
// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
var server: http.Server = app.listen(3000, () => {
  var host = 'localhost';
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
