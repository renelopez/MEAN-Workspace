angular.module('app').controller('mvNavBarLoginCtrl',function($http){
   var vm=this;
   vm.signin=signin;
   vm.user='';
   vm.password='';

   function signin(username,password){
       $http.post('/login',{username:username,password:password}).then(function(response){
           if(response.data.success){
               console.log('logged in')
           }
           else{
               console.log('Not logged in');
           }
       })
   }
});