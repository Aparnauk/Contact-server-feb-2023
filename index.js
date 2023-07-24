

// -----------------TO HOST A JSON FILE TO BACKEND/SERVER SIDE-----------------------


// to import json server to index.js
const jsonServer = require('json-server')

// create json server application
const server = jsonServer.create()

// set up route for db.json
const router = jsonServer.router('db.json')

// return a middle were used by json server
const middleware = jsonServer.defaults()

// set up a port for working backend. set up port number server app
// env/environment used for middleware
const port = process.env.port||3000

// use router and middleware in server app
server.use(middleware)
server.use(router)

// To listen the server app in port
server.listen(port,()=>{
    console.log('contact server app started at port',port);
})


