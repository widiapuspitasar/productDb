const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

module.exports = (req, res) => {
  server.use(middlewares);
  server.use(router);
  server(req, res);
};
