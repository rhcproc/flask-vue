
var express = require('express')
var app = express()
var fs = require('fs')
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/', function (req, res){
	fs.readFile('index.html', function (error, data){
		if (error){
			console.log(error);
		} else{
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(data);
		}
	});
});

var i = 0;
app.post('/api/test/', function(req, res){
    var name = "AI_"+i++;
    var user_id =  {name:name};
    res.send(user_id);
});


app.listen(3000, function(){
	console.log('Server Start');
});
