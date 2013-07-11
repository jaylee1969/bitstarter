var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var responseFile = fs.readFileSync("index.html");

var responseString = responseFile.toString();

app.get('/', function(request, response) {
  response.send(responseString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
