var mongoose=require('mongoose'),
    encryption=require('../utilities/encryption');


var userSchema=mongoose.Schema({
    firstName:{type:String,required:'{PATH} is required'},
    lastName:{type:String,required:'{PATH} is required'},
    username:{
        type:String,
        required:'{PATH} is required',
        unique:true
    },
    salt:{type:String,required:'{PATH} is required'},
    hashed_pwd:{type:String,required:'{PATH} is required'},
    roles:[String]
});

userSchema.methods={
    authenticate:function(passwordToMatch){
        return encryption.hashPasswd(this.salt,passwordToMatch) === this.hashed_pwd
    }
};

var User=mongoose.model('User',userSchema);

function createDefaultUsers(){
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
}

exports.createDefaultUsers=createDefaultUsers;