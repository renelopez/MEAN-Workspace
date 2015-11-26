angular.module('app').controller('mvUserListCtrl',function(mvUser){
   var vm=this;
   vm.userList=mvUser.query();
});