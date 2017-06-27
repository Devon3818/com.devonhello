var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var routes = require('./routes/index');
var users = require('./routes/users');
var API = require('./routes/API/index');
var ADMIN = require('./routes/Admin/index');
var ESHOP = require('./routes/Eshop/index');
var cfdk = require('./routes/cfdk/cfdk');
var chihu = require('./routes/chihu/chihu');
var chihuangular = require('./routes/chihuangular/chihuangular');
var buka = require('./routes/buka/buka');
var cfdkAdmin = require('./routes/cfdkAdmin/admin');

require('events').EventEmitter.defaultMaxListeners = Infinity;

var app = express();
app.setMaxListeners(100);

app.use(express.static(path.join(__dirname, 'public')));
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});




var admin = express(); // the sub app
var api = express();

var secret = express();


var eventEmitter=require('events'),
    emitter=new eventEmitter();
emitter.setMaxListeners(0);


var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

var ids = false;



//socket连接
//io.on( "connection", function( socket ){
//  console.log( "一个新连接" ); 
//  console.log(socket.socket);
//  //console.log(socket.to);
//  //socket.emit('news', { hello: 'world' });
//  
//	socket.on('my other event', function (data) {
//  		var id = data.id+'';
//  		//console.log(socket);
//  		//socket.to(id).emit('news', { hello: 'world' });
//  		sends(id,socket);
//  		
//});
//});

function sends(id,socket){
	
	io.to(id).emit('newsd', { hello: "接受者："+id });
}

//http.listen(port,function(){
//  console.log('正在监听3000端口');
//});


var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


api.use('/',API);

admin.use('/secr*t', secret);
app.use('/api',api);


// view engine setup
app.engine('.html', ejs.__express);
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/', routes);
app.use('/users', users);
app.use('/admin',ADMIN);
app.use('/eshop',ESHOP);
app.use('/cfdk', cfdk);   //  厨房大咖
app.use('/chihu', chihu);   //  吃乎
app.use('/chihuangular', chihuangular);   //  吃乎
app.use('/buka', buka);   //  buka
app.use('/cfdkAdmin', cfdkAdmin);   //  厨房大咖后台

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



//console.log(app.setMaxListeners);
//console.log(app.setMaxListeners(100));


module.exports = app;
