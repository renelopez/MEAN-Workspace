(function(){
    'use strict';

    angular.module("app")
            .controller("mvSignupCtrl",mvSignupCtrl);

    mvSignupCtrl.$inject=['$location','mvAuth','mvNotifier'];

    function mvSignupCtrl($location,mvAuthService,mvNotifier) {
        var vm = this;

        vm.signup = signup;

        function signup(){

            var newUserData={
                username:vm.email,
                password:vm.password,
                firstName:vm.firstName,
                lastName:vm.lastName
            };

            mvAuthService.createUser(newUserData).then(function(){
                mvNotifier.notify('User '+ newUserData.username+' was created succesfully');
                $location.path('/')
            },function(reason){
                mvNotifier.error('There were some errors while creating the user.' + reason);
                $location.path('/')
            });
        }


    }


})();




