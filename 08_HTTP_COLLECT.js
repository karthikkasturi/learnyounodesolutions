// HTTP COLLECT
var http = require('http')
var sum = 0
var str = ''
http.get(process.argv[2], function(response){
	response.on("data", function(data){
		sum += data.length
		str += data.toString()
	})
	response.on("end", function(){
		console.log(sum)
		console.log(str)
	})
	
})
