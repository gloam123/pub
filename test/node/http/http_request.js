var http = require('http');
var http2 = require('http-server');

var server = http.createServer(function(req, response) {
    
    console.log("request heads=" + req.headers);
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>Hello world</h1>');

    //response.write()
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080');