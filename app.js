var express = require('express');
var app = express();
var server = require('http').createServer(app);
//var bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use('/api/v1', require('./router'));
app.use(express.static(__dirname + '/views/'));
exports = module.exports = app;
