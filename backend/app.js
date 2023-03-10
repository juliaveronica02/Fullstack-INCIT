var express = require('express');
var path = require('path');
const bodyParser = require("body-parser")
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// enabling cors for all requests by using cors middleware.
app.use(
    cors({
      credentials: true,
      origin: (req, cb) => {
        // allow from anywhere.
        cb(null, true);
      },
    })
);

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;