var mongoose=require('mongoose');

var courseSchema=mongoose.Schema({
    title:{type:String,required:'{PATH} is required'},
    featured:{type:Boolean,required:"{PATH} is required"},
    published:{type:Date,required:"{PATH} is required"}
});


var Course=mongoose.model('Course',courseSchema);


function createDefaultCourses(){
    Course.find({}).exec(function(err,collection){
      if(collection.length === 0){
          Course.create({title:'C# for Sociopaths',featured:true,published:new Date('12/1/2011')});
          Course.create({title:'Javascript Roadtrip',featured:false,published:new Date('12/4/2015')});
          Course.create({title:'Javascript Roadtrip II',featured:true,published:new Date('12/3/2014')});
          Course.create({title:'Javascript Roadtrip III',featured:true,published:new Date('12/5/2012')});
          Course.create({title:'C# for Java Developers',featured:false,published:new Date('12/6/2011')});
          Course.create({title:'Front End Foundations',featured:true,published:new Date('12/6/2013')});
          Course.create({title:'Ruby On Rails 101',featured:false,published:new Date('12/4/2012')});
          Course.create({title:'React for Dummies',featured:true,published:new Date('12/3/1990')});
          Course.create({title:'JSON vs XML',featured:true,published:new Date('12/2/1832')});
          Course.create({title:'Python for Chefs',featured:false,published:new Date('12/1/1943')});
          Course.create({title:'Docker for admins',featured:true,published:new Date('12/3/2015')});
          Course.create({title:'Android for Mac Lovers',featured:false,published:new Date('12/5/2011')});
          Course.create({title:'MVC from Scratch',featured:true,published:new Date('12/6/2011')});
          Course.create({title:'C++ for games that dont suck',featured:false,published:new Date('12/7/2007')});
          Course.create({title:'Soft skills for the grumpy developer',featured:true,published:new Date('12/9/2021')});
          Course.create({title:'PHP is not bad at all',featured:false,published:new Date('12/10/2009')});
          Course.create({title:'Arduino for Robotic projects',featured:true,published:new Date('12/3/2002')})   
      }
    });
}

exports.createDefaultCourses=createDefaultCourses;