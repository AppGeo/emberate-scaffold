'use strict';

var express = require('express');
var chalk = require('chalk');
var app = express();
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';

app.use('/', express.static('./static'));
app.use('/scripts', express.static('./dist/scripts'));

app.listen(port, function () {
  console.log(chalk.green('Server running in \'%s\' on localhost:%d'), env, port);
});
