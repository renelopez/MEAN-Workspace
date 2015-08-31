angular.module('app').controller('mvMainCtrl',function(){
    var vm=this;
    vm.courses=[
        {name:'C# for Sociopaths',featured:true,published:new Date('12/1/2011')},
        {name:'Javascript Roadtrip',featured:false,published:new Date('12/4/2015')},
        {name:'Javascript Roadtrip II',featured:true,published:new Date('12/3/2014')},
        {name:'Javascript Roadtrip III',featured:true,published:new Date('12/5/2012')},
        {name:'C# for Java Developers',featured:false,published:new Date('12/6/2011')},
        {name:'Front End Foundations',featured:true,published:new Date('12/6/2013')},
        {name:'Ruby On Rails 101',featured:false,published:new Date('12/4/2012')},
        {name:'React for Dummies',featured:true,published:new Date('12/3/1990')},
        {name:'JSON vs XML',featured:true,published:new Date('12/2/1832')},
        {name:'Python for Chefs',featured:false,published:new Date('12/1/1943')},
        {name:'Docker for admins',featured:true,published:new Date('12/3/2015')},
        {name:'Android for Mac Lovers',featured:false,published:new Date('12/5/2011')},
        {name:'MVC from Scratch',featured:true,published:new Date('12/6/2011')},
        {name:'C++ for games that dont suck',featured:false,published:new Date('12/7/2007')},
        {name:'Soft skills for the grumpy developer',featured:true,published:new Date('12/9/2021')},
        {name:'PHP is not bad at all',featured:false,published:new Date('12/10/2009')},
        {name:'Arduino for Robotic projects',featured:true,published:new Date('12/3/2002')}

    ]
});