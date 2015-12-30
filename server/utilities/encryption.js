var crypto=require('crypto');

exports.createSalt=function(){
    return crypto.randomBytes(128).toString('base64');
};

exports.hashPasswd=function(salt,password){
    var hmac= crypto.createHmac('sha1',salt);
    return hmac.update(password).digest('hex');
};