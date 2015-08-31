angular.module('app').controller('mvNavBarLoginCtrl',function(){
   var vm=this;
   vm.signin=signin;

   function signin(username,password){
       console.log("Doing Autentication")
   }
});