import * as http from 'http';
import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import {HeroModel} from './models/heroModel';
import {routeHeroes} from './routes/heroes';
import {appConfig} from './appConfig';

mongoose.connect(appConfig.dbConnString);

var app = express();

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

var server = app.listen(appConfig.port, appConfig.hostName, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
