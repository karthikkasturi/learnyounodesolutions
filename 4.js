var x = process.argv[2]
var fs = require('fs')
fs.readFile(x, function(err, data){
	console.log(data.toString().split('\n').length - 1)
} )

