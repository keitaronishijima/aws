var express = require('express');
var app = express()

app.get('/', function(req, res){
  res.send('Hello node.js');
});

app.listen(3000, '52.195.18.17');