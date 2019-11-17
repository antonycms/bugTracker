const Express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

class App {
  constructor() {
    this.server = Express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(bodyParser.urlencoded({ extended: true }));
    this.server.set('view engine', 'ejs');
    this.server.engine('ejs', require('ejs').__express);
    this.server.set('views', path.resolve(__dirname, 'views'));
    this.server.use('/static', Express.static(path.resolve(__dirname, 'views')));
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
