import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index'

const cwd = process.cwd();

var createError = require('http-errors');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(cwd, 'public')));
app.use('/', indexRouter);

// Use the babel-created stylesheet. Webpack has no concept of these styles now.
app.use('/style.css', (req, res, next) => {
  const stylePath = path.join(cwd, 'dist/style.css');
  res.sendFile(stylePath)
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(new createError.NotFound())
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  next(new createError(500, err))
});

export default app;
