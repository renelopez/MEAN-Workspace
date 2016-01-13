var User=require('mongoose').model('User');
var encryption=require('../utilities/encryption');


exports.createUser=function(req,res,next){

  var userData=req.body;
  userData.salt=encryption.createSalt();
  userData.hashed_pwd=encryption.hashPasswd(userData.salt,userData.password);
  User.create(userData,function(err,user){
      if(err){
          if(err.toString().indexOf('E11000') > -1){
              err=new Error("User already exists")
          }
          res.status(400);
          return res.send({reason:err.toString()})
      }
      req.logIn(user,function(err){
         if(err){
             return next(err)
         }
          res.send(user);
      });
  })
};



exports.getUsers=function(req,res){
    User.find({}).exec(function(err,collection){
        res.send(collection)
    })
};

exports.updateUser=function(req,res){
    var userUpdates=req.body;
    if(req.user.id != userUpdates._id && !req.user.hasRole('admin')){
        req.status(403);
        res.end()
    }
    req.username=userUpdates.username;
    req.firstName=userUpdates.firstName;
    req.lastName=userUpdates.lastName

    if(userUpdates.password && userUpdates.password.length > 0){
        req.user.salt=encryption.createSalt();
        req.user.password=encryption.hashPasswd(req.user.salt,userUpdates.password)
    }
    req.user.save(function(err){
        if(err){
            res.status(400);
            return res.send({reason:'User couldnt be updated.Reason: '+ err})
        }
        res.send(req.user)
    })
};
