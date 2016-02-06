(function(){

    'use strict';
    angular.module('app').factory('mvCourse',mvCourse);

    mvCourse.$inject=['$resource'];

    function mvCourse($resource){
        var CourseResource=$resource('/api/courses/:id',{_id:"@id"},{
            'update':{method:'PUT',isArray:false}
        });

        return{
            getAllCourses:getAllCourses
        };

        function getAllCourses(){
           return CourseResource.query();
        }
    }
})();
