var http = require('http');
var url = require('url');
var fs = require('fs');
var nStatic = require('node-static');

var fileServer = new nStatic.Server('../client');

var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;
  console.log(__dirname + path)
  switch (path) {
    case '/':
      response.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      response.write("This is Test Message.");
      response.end();
      break;
    case '/index.html':
      fs.readFile(__dirname + path, function (error, data) {
        if (error) {
          response.writeHead(404);
          response.write(error);
          response.end();
        } else {
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });
          response.write(data);
          response.end();
        }
      });
      break;
 
    default:
    fs.readFile(__dirname + path, function (error, data) {
      if (error) {
        response.writeHead(404);
        response.write(error);
        response.end();
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        response.write(data);
        response.end();
      }
    });
       break;
  }
});

// Listen for an application request on given port
// provide a second argument call back function to inform user
// In class: start with call back removed and add it. 
// In class: turn port into a const for reuse

server.listen(8082, function() {
  console.log('server started. listening on http://127.0.0.1:8082')
});  

