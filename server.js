// Import dependencies
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json') 
const middlewares = jsonServer.defaults()

// Setup default middlewares
server.use(middlewares)

// Setup routes
server.use(
    jsonServer.rewriter({
        "/*": "/$1"
    })
);

server.use(router);

// Start server
server.listen(3000, () => {
  console.log(`JSON Server running on port`)
})

module.exports = server