const express = require('express')
const app = express()
var path = require('path');
const PORT= process.env.PORT || 3000;
var bodyParser = require('body-parser');

var indexRouter = require('./routes/router');

// var SerialPort = require('serialport').SerialPort,
//     serial = new SerialPort('/dev/ttyAMA0', {
//     baudrate : 115200
//   }) ;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/node_modules')));


app.listen( PORT, function(){
  console.log('Express listening on port', PORT);
});


app.use('/', indexRouter);

module.exports = app;

