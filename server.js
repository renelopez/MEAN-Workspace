var express = require('express');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// Mongo ,Path and Address configuration values
var config=require('./server/config/config')[env];

// Express Views & Static Content -- Stylus
require('./server/config/express')(app,config);

// Mongoose Startup
require('./server/config/mongoose')(config);

// Express Routes
require('./server/config/routes')(app);


app.listen(config.port);
console.log('Listening on port ' + config.port);