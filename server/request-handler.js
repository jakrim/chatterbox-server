/*************************************************************
LOGIC OF THE GET AND POST
You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.
*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.
**************************************************************/
const { parse } = require('querystring');

var myObj = {
	results: []
};
var defaultCorsHeaders = {
	'access-control-allow-origin': '*',
	'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
	'access-control-allow-headers': 'content-type, accept',
	'access-control-max-age': 10 // Seconds.
};
var handleRequest = function(request, response) {
	var headers = defaultCorsHeaders;
	headers['Content-Type'] = 'application/json';

	console.log(
		'Serving request type ' + request.method + ' for url ' + request.url
	);

	if (request.url === '/classes/messages' && request.method === 'POST') {
		response.writeHead(201, headers);
		// if (request.url !== '/classes/messages') {
		// 	response.writeHead(404);
		// }
		var body = '';
		request.on('data', chunk => {
			body += chunk;
		});
		request.on('end', () => {
			myObj.results.push(JSON.parse(body));
		});

		response.end(JSON.stringify(myObj));
	} else if (request.url === '/classes/messages' && request.method === 'GET') {
		response.writeHead(200, headers);

		response.end(JSON.stringify(myObj.results));
	}
};

exports.handleRequest = handleRequest;
