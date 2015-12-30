angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/',{templateUrl:'/partials/main/main',controller:'mvMainCtrl as vm'})
        .when('/admin/users',{templateUrl:'/partials/admin/user-list',
            controller:'mvUserListCtrl as vm',
            resolve:{
                auth:function($q,mvIdentity){
                    if(mvIdentity.currentUser && mvIdentity.currentUser.roles.indexOf('admin') > -1){
                        return true;
                    }
                    else{
                        return $q.reject('not authorized')
                    }
                }
            }})
        .when('/signup',{templateUrl:'/partials/account/signup',
        controller:"mvSignupCtrl as vm"})
});

angular.module('app').run(function($rootScope,$location){
    $rootScope.$on('$routeChangeError',function(evt,current,previous,rejection){
        if(rejection === 'not authorized'){
            $location.path('/')
        }
    })
});