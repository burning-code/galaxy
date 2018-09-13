const startJsonServer = require('json-server')
const path = require('path')
const server = startJsonServer.create()
const router = startJsonServer.router(path.join(__dirname, '../server/db.json'))
const middlewares = startJsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running')
})