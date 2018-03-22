var net = require('net')
var date = new Date()
net.createServer(function(socket){
	var str = '';
	str += date.getFullYear() + '-';
	var x = +date.getMonth() + 1;
	if(x<10)
		str+= '0';
	str += x + '-';
	x = +date.getDate();
	if(x<10)
		str+= '0';
	str += x + ' ';
	x = +date.getHours();
	if(x<10)
		str+= '0';
	str += x + ':';
	x = +date.getMinutes();
	if(x<10)
		str+= '0';
	str += x;
	socket.end(str + '\n')
}).listen(process.argv[2])
