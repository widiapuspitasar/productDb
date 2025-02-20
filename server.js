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

// Jika dijalankan secara lokal, jalankan server pada port 3000
if (!process.env.VERCEL_ENV) {
  server.listen(3000, () => {
    console.log(`JSON Server running on port 3000`)
  })
}

module.exports = server
