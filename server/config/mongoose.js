var mongoose=require('mongoose');
var encryption=require('../utilities/encryption');


module.exports=function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error....'));
    db.once('open', function callback() {
        console.log('multivision db opened');
    });


    var userSchema=mongoose.Schema({
        firstName:String,
        lastName:String,
        username:String,
        salt:String,
        hashed_pwd:String,
        roles:[String]
    });

    userSchema.methods={
        authenticate:function(passwordToMatch){
           return encryption.hashPasswd(this.salt,passwordToMatch) === this.hashed_pwd
        }
    };

    var User=mongoose.model('User',userSchema);

    User.find({}).exec(function(err,collection){
        if(collection.length===0){

            var salt,hash;

            salt=encryption.createSalt();
            hash=encryption.hashPasswd(salt,'Joe');
            User.create({firstName:"Joe",lastName:'Eames',username:'joe',salt:salt,hashed_pwd:hash,roles:["admin"]});

            salt=encryption.createSalt();
            hash=encryption.hashPasswd(salt,'John');
            User.create({firstName:'John',lastName:'Papa',username:'john',salt:salt,hashed_pwd:hash,roles:[]});

            salt=encryption.createSalt();
            hash=encryption.hashPasswd(salt,'Dan');
            User.create({firstName:"Dan",lastName:'Whalin',username:'dan',salt:salt,hashed_pwd:hash});
        }
    });
};