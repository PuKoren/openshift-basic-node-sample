var http = require('http')
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

http.createServer(function (req, res) {
	res.writeHead(200);
	res.end('Hello world');
}).listen(port);

console.log('Server listening on ', port);
