var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var cors = require('cors')
var usersRouter = require('./routes/rest_usuario');
var productoRouter = require('./routes/rest_producto');
var comentarioRouter = require('./routes/rest_comentario');
var transaccionRouter = require('./routes/rest_transaccion')
var path = require('path');

var app = express();
app.use(logger('dev'));
app.use(cors());
app.use('/rest/usuario', usersRouter);
app.use('/rest/producto', productoRouter);
app.use('/rest/transaccion', transaccionRouter);
app.use('/rest/comentario', comentarioRouter);

app.set('views', path.join(__dirname, 'views'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




module.exports = app;


