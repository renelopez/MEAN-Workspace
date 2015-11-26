angular.module('app').controller('mvNavBarLoginCtrl', function ($http,$location, mvAuth, mvIdentity, mvNotifier) {
    var vm = this;
    vm.signin = signin;
    vm.logout = logout;
    vm.user = '';
    vm.password = '';
    vm.identity = mvIdentity;


    function signin(username, password) {
        mvAuth.authenticateUser(username, password).then(function (success) {
            if (success) {
                mvNotifier.notify('You have succesfully signed in!')
            } else {
                mvNotifier.notify('Username/Password combination incorrect')
            }
        })
    }

    function logout(){
        mvAuth.logout().then(function(){
           vm.user='';
           vm.password='';
           mvNotifier.notify('You have succesfully signed out!!!');
           $location.path('/');
        });
    }
});