var express = require('express');
var app = express()

app.set('host', '52.195.18.17');

app.get('/', function(req, res){
  res.send('Hello node.js');
});

app.listen(80, '52.195.18.17');