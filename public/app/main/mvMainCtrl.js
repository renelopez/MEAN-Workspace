(function(){
    angular.module('app').controller('mvMainCtrl',mvMainCtrl)
    mvMainCtrl.$inject=['mvCourse'];

    function mvMainCtrl(mvCourse){
        var vm=this;
        vm.courses=mvCourse.getAllCourses();
    }
})();

