var http = require('http');
var config = require('./config');
var express = require('express');

var socket = require('socket.io');

var hookController = require('./controllers/hookController');
var app = express();

app.set('port',config.get('port'));
app.set('view engine','ejs');
app.use(express.static('./public'));


var server = http.createServer(app).listen(config.get('port'),()=>{
    console.log('Express server listening on port 2000')
});

var io = socket(server);

hookController(app);

io.on('connection', (socket)=>{
    console.log('connection has been made');
});