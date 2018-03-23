var http = require('http')
var parser = require('url').parse
var routes = {
    '/api/unixtime': function(parsedurl){
        var date = new Date(parsedurl.query.iso)
        return {
            unixtime: date.getTime() 
        }
    },
    '/api/parsetime': function(parsedurl){
        var date = new Date(parsedurl.query.iso)
        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        
    }

}

http.createServer(function(req, res){
    var parsedurl = parser(req.url, true)


    var action = routes[parsedurl.pathname]
    

    if(action){
        res.writeHead(200, {'Content-Type': 'application/json'})
        var json = JSON.stringify(action(parsedurl))
        res.end(json)
    }
    else{
        
        res.writeHead(404)
        res.end();
        return res
    }
}).listen(process.argv[2])
