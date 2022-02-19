var http = require('http');
var express = require('express');
var app = express();

app.get('/',function(req,res) {
    //res.send('Hello');
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('Hello');
    res.write('Bye');
    res.end();
});

app.listen(3000, function() {
    console.log('start');
});
