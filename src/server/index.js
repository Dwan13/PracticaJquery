/* var http = require('http')
var assets = require('./assets.js') */
import express from 'express'
const app = express()

var api = require('../server/api')


app.use(express.static('public'))

app.use('/api', api)

/* 
var server = http.createServer((request, response) => {
    console.log('Recibí un request ' + request.url)
    switch (request.url) {
        case '/':
            assets.serveStatic('index.html', function(err, content) {
                response.end(content)
            })
            break
        case '/app.js':
            assets.serveStatic('app.js', function(err, content) {
                response.end(content)
            })
            break
        case '/app.css':
            assets.serveStatic('app.css', function(err, content) {
                response.end(content)
            })
            break
        default:
            response.statusCode = 404
            response.end('Not found')
            break
    }
    response.writeHead(200, 'content-type', 'text/plain')
     response.end('hola platzi')
}) */

app.listen(3000, () => {
        console.log('The application is running on localhost:3000!')
    })
    /* server.listen(3000, () => {
        console.log('The application is running on localhost:3000!')
    }) */