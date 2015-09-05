angular.module('app').value('mvToastr',toastr);

angular.module('app').factory('mvNotifier',function(mvToastr){
   return{
       notify:notify
   };

    function notify(msg){
        mvToastr.success(msg);
        console.log(msg);
    }
});