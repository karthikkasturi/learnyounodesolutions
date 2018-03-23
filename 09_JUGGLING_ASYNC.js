// JUGGLING ASYNC
var http = require('http')
var sum = 0
var str = ['','','']


for(var i = 2; i < process.argv.length; i++)
{
	myget(i)
}

function myget(i){
	http.get(process.argv[i], function(response){
		response.on("data", function(data){
			str[i-2] += data.toString()
		})
		response.on("end", function(){
			sum += 1
			if(sum == 3){
				//console.log(str.length)
				str.forEach(function(line){
					console.log(line)
				})
			}
		})
	})

}
