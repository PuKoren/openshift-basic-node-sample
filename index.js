var http = require('http')
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

http.createServer(function (req, res) {
	res.writeHead(200);
	res.end('Hello world');
}).listen(port, ip);

console.log('Server listening on ', port);
