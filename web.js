var express = require('express');
var fs = require('fs');
var index = fs.readFileSync('index.html');
var buff = index.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buff);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
