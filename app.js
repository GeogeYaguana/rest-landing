var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

var cors = require('cors')
var usersRouter = require('./routes/rest_usuario');
var productoRouter = require('./routes/rest_producto');
var comentarioRouter = require('./routes/rest_comentario');
var transaccionRouter = require('./routes/rest_transaccion')
var authenticateJWT = require('./middleware/auth');

var path = require('path');


var app = express();
app.use('/rest/usuario', authenticateJWT, usersRouter);
app.use(logger('dev'));
app.use(cors());
app.use('/rest/usuario', usersRouter);
app.use('/rest/producto', productoRouter);
app.use('/rest/transaccion', transaccionRouter);
app.use('/rest/comentario', comentarioRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.set('views', path.join(__dirname, 'views'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




module.exports = app;


