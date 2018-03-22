var fs = require('fs')
module.exports = function(dirname, ext, callback){
	fs.readdir(dirname, function(err, list){
		if(err) return callback(err)
		var newlist = []
		list.forEach(function(file){
			if(file.endsWith('.'+ext))
				newlist.push(file)
		})
		callback(null, newlist)
	}) 
}
