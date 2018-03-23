// HTTP UPPERCASERER (what kind of name is that?)

var http = require('http')

var map = require('through2-map')
http.createServer(function(request, response){
	request.pipe(map(function(chunk){
		return chunk.toString().toUpperCase()
	})).pipe(response)
}).listen(process.argv[2])
