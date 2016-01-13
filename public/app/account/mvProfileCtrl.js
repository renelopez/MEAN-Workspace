(function(){
    'use strict';

    angular.module('app').
        controller('mvProfileCtrl',mvProfileCtrl);

    mvProfileCtrl.$inject=['mvAuth','mvIdentity','mvNotifier'];

    function mvProfileCtrl(mvAuth,mvIdentity,mvNotifier){
        var vm=this;

        vm.username=mvIdentity.currentUser.username;
        vm.firstName=mvIdentity.currentUser.firstName;
        vm.lastName=mvIdentity.currentUser.lastName;
        vm.password=mvIdentity.currentUser.password
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
