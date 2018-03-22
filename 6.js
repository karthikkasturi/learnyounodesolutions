var mod = require('./6_1.js')
mod(process.argv[2], process.argv[3], function(err, data){
	if(err) return console.log(err)
	data.forEach(function(line){
		console.log(line)
	})
})
