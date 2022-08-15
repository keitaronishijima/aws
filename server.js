var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
  res.send('Hello node.js');
});

app.listen(3000);