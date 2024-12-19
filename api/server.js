// Import dependencies
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json') 
const middlewares = jsonServer.defaults()

// Setup default middlewares
server.use(middlewares)

// Setup routes
server.use('/api', router)

// Start server
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`)
})

module.exports = server