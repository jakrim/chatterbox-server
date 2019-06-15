/* Import node's http module: */
var http = require('http');
var handleRequest = require('./request-handler.js').handleRequest;
var fs = require('fs');
var url = require('url');

var routes = {
	'/classes/messages': handleRequest
};

// KNOWS TO INVOKE THE FUNCTIONS FROM
// REQUETS HANDLER AND SEND DATA AND STATUS CODE TO CLIENT

var port = 3000;
var ip = '127.0.0.1';

var server = http.createServer(handleRequest);
console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);
