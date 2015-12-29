import * as http from 'http';
import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import {HeroModel} from './models/heroModel';
import {routeHeroes} from './routes/heroes';

mongoose.connect('mongodb://localhost/ng2-sandbox');

var app: express.Express = express();

var db = mongoose.connection;

// view engine setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router();

router.use((req, res, next) => {
  // always called
  next();
});

routeHeroes(router);

app.use('/api', router);

var server: http.Server = app.listen(3000, () => {
  var host = 'localhost';
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
