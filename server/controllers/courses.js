var Course=require('mongoose').model('Course');

exports.getAllCourses=function(req,res,next){
    Course.find({}).exec(function(error,collection){
        res.send(collection);
    });
};

