var http = require('http')
http.get(process.argv[2], function(response){
	response.on("data", function(data){
		data.toString().split('\n').forEach(function(line){
			console.log(line.toString())
		})
	})
})
