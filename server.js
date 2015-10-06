var express = require('express'),
    passport=require('passport'),
    mongoose=require('mongoose'),
    LocalStrategy=require('passport-local').Strategy;


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// Mongo ,Path and Address configuration values
var config=require('./server/config/config')[env];

// Express Views & Static Content -- Stylus
require('./server/config/express')(app,config);

// Mongoose Startup
require('./server/config/mongoose')(config);

var User=mongoose.model('User');
passport.use(new LocalStrategy(function(username,password,done){
    User.findOne({username:username}).exec(function(err,user){
        if(user && user.authenticate(password)){
            return done(null,user);
        } else{
            return done(null,false);
        }
    })
}));

passport.serializeUser(function(user,done){
   if(user){
       done(null,user._id);
   }
});

passport.deserializeUser(function (id,done) {
   User.findOne({_id:id}).exec(function(err,user){
       if(user){
           return done(null,user);
       }
       else{
           return done(null,false);
       }
   })
});

// Express Routes
require('./server/config/routes')(app);


app.listen(config.port);
console.log('Listening on port ' + config.port);