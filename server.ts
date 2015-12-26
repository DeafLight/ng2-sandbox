import * as http from 'http';
import * as express from 'express';
import * as path from 'path';

var app: express.Express = express();
// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
var server: http.Server = app.listen(3000, function() {
  var host = 'localhost';
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
