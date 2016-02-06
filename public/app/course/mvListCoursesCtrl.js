(function () {
    'use strict';
    angular.module('app').controller('mvListCoursesCtrl', mvListCoursesCtrl);

    mvListCoursesCtrl.$inject = ['mvCourse'];
    function mvListCoursesCtrl(mvCourse) {
        var vm = this;

        vm.courses = [];
        vm.options = [{
            text: "Published Date",
            value: "published"
        },
            {
                text: "Title",
                value: "title"
            }
        ];

        initialize();

        function initialize() {
            vm.selectedOption=vm.options[1].value;
            vm.courses = mvCourse.getAllCourses();
        }
    }
})();