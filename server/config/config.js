var path=require('path');
var rootPath=path.normalize(__dirname +'/../../');
module.exports= {
    development:{
        db:'mongodb://localhost/multivision',
        rootPath:rootPath,
        port:process.env.PORT || 3030
    },
    production:{
        db:'mongodb://rlopez:multivision@ds035593.mongolab.com:35593/multivision',
        rootPath:rootPath,
        port:process.env.PORT || 80
    }
};
