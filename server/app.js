var http = require('http2')
var url = require('url')
var fs = require('fs')
var https = require('express-force-https')
var express = require('express')

var app = express()

//setting middleware
app.use(express.static(__dirname + '/../client')) //Serves resources from client folder
app.use(https)

var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname
  console.log(__dirname + path)
  switch (path) {
    case '/':
      fs.readFile(__dirname + path, function (error, data) {
        if (error) {
          response.writeHead(404)
          response.write(error)
          response.end()
        } else {
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });
          response.write(data)
          response.end()
        }
      })
      break;
    default:
      fs.readFile(__dirname + path, function (error, data) {
        if (error) {
          response.writeHead(404)
          response.write(error)
          response.end()
        } else {
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });
          response.write(data)
          response.end()
        }
      })
      break;
  }
});

// Listen for an application request on given port
// provide a second argument call back function to inform user
// In class: start with call back removed and add it. 
// In class: turn port into a const for reuse

var s = app.listen(8081, function () {
  console.log('app started. listening on http://127.0.0.1:8081')
})

