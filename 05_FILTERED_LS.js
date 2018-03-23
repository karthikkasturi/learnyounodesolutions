// FILTERED LS
var x = process.argv
var fileName = x[2]
var delimiter = x[3]
var fs = require('fs')
fs.readdir(fileName, function(err, list){
    if(err) return console.log(err)
	for(var i = 0; i < list.length; i++)
	{
		if(list[i].endsWith('.'+delimiter))
		{
			console.log(list[i])
		}
	}
})
