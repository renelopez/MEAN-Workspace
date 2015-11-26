angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/',{templateUrl:'/partials/main/main',controller:'mvMainCtrl as vm'})
        .when('/admin/users',{templateUrl:'/partials/admin/user-list',controller:'mvUserListCtrl as vm'})
});

