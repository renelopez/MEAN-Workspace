angular.module('app').value('mvToastr',toastr);

angular.module('app').factory('mvNotifier',function(mvToastr){
   return{
       error:error,
       notify:notify
   };

    function error(){
        mvToastr.error(msg);
        console.log(msg);
    }

    function notify(msg){
        mvToastr.success(msg);
        console.log(msg);
    }
});