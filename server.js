var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage

var bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

var chats = [];

app.get('/chats', function(req, res) {
	res.status(200);
  	res.send(JSON.stringify(chats));
});

app.get('/chat/:name', function(req, res) {
	res.status(200);
	for(var i=0;i<chats.length;i++){
		if (chats[i].name == req.params.name){
			res.send(JSON.stringify(chats[i]));
		}
	}
  	
});

app.delete('/chat/:name',function(req,res) {
	res.status(200);
	for(var i=0;i<chats.length;i++){
		if (chats[i].name == req.params.name){
			chats.splice(i,1);
		}
	}
	
});


app.post('/chat',function(req,res){
	var chat = {
		color : req.body.color,
		name : req.body.name
	};
	chats.push(chat);
	res.status(200);
	res.send(chats);
});

app.listen(3000,function() {
	console.log("Example app listening on port 3000!");
});