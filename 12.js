var http = require('http')
//var readable = new require('stream').Readable()

var map = require('through2-map')
http.createServer(function(request, response){
	request.pipe(map(function(chunk){
		return chunk.toString().toUpperCase()
	})).pipe(response)
	//readable.push(request.toString().toUpperCase())
	//readable.push(null)
	//readable.pipe(response)
}).listen(process.argv[2])
