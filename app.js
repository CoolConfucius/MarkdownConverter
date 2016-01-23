'use strict';

var PORT = 4000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var marked = require('marked');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  var html = fs.readFileSync('./index.html').toString();
  res.send(html);
});

app.post('/render', function(req, res) {
  var markedText = req.body.input; 
  console.log('marked text', markedText);
  var htmlText = marked(markedText); 
  console.log("HTML", htmlText);
  res.send(htmlText);
}); 



// spin up server
app.listen(PORT, function() {
  console.log('Express server listening on port', PORT)
});