var express = require('express');

var app = express.createServer(express.logger());

var buffer = new buffer('test');

app.get('/', function(request, response) {
    /var data = buffer.toString();/
    response.send('helloi');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
