(function(){
    'use strict';

    angular.module('app').
        controller('mvProfileCtrl',mvProfileCtrl);

    mvProfileCtrl.$inject=['mvAuth','mvNotifier'];

    function mvProfileCtrl(mvAuth,mvNotifier){
        vm.username=mvAuth.currentUser.username;
        vm.firstName=mvAuth.currentUser.firstName;
        vm.lastName=mvAuth.currentUser.lastName;
        vm.update=update;




        function update(){
            var updateUser={
                username:vm.username,
                firstName:vm.firstName,
                lastName:vm.lastName
            };
            if(vm.password && vm.password.length > 0){
                updateUser.password=vm.password
            }
            mvAuth.updateCurrentUser(updateUser).then(function(response){
                mvNotifier.notify('Your user account was succesfully updated')
            },function(reason){
                mvNotifier.error(reason);
            })
        }
    }

})();
