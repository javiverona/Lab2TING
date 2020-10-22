var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//
var destinosRouter = require('./routes/destinos')
var hotelesRouter = require('./routes/hotelesdestinos');
var hoteldescripRouter = require('./routes/hoteldescrip');
var aboutRouter = require('./routes/about');
var opinionRouter = require('./routes/opinion');

/**var vuelosRouter = require('./routes/vueloshotel');
var chekingRouter = require('./routes/checking');
var gestionRouter = require('./routes/gestionar');
var reservaRouter = require('./routes/reserva');
var contactRouter = require('./routes/contactar');
var micuentaRouter = require('./routes/micuenta');/** */

//

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//
app.use('/destinos', destinosRouter);
app.use('/hotelesdestinos', hotelesRouter);
app.use('/about', aboutRouter);
app.use('/opinion', opinionRouter);
app.use('/hoteldescrip', hoteldescripRouter);

/**app.use('/vueloshotel', vuelosRouter);
app.use('/checking', chekingRouter);
app.use('/gestionar', gestionRouter);
app.use('/reserva', reservaRouter);
app.use('/contactar', contactRouter);
app.use('/micuenta', micuentaRouter);/** */

//

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
