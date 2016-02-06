angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    var routeRoleChecks={
        admin:{auth:function(mvAuth){
            return mvAuth.authorizeCurrentUserForRoute('admin');
        }},
        user:{auth:function(mvAuth){
            return mvAuth.authorizeAuthenticatedUserForRoute();
        }}
    };


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/',{templateUrl:'/partials/main/main',controller:'mvMainCtrl as vm'})
        .when('/admin/users',{templateUrl:'/partials/admin/user-list',
            controller:'mvUserListCtrl as vm',resolve:routeRoleChecks.admin
            })
        .when('/signup',{templateUrl:'/partials/account/signup',
        controller:"mvSignupCtrl as vm"})
        .when('/profile',{templateUrl:'/partials/account/profile',
            controller:'mvProfileCtrl as vm',resolve:routeRoleChecks.user})
        .when('/courses',{templateUrl:'/partials/course/listCourses',
            controller:'mvListCoursesCtrl as vm'})
});

angular.module('app').run(function($rootScope,$location){
    $rootScope.$on('$routeChangeError',function(evt,current,previous,rejection){
        if(rejection === 'not authorized'){
            $location.path('/')
        }
    })
});