angular.module('app').factory('mvAuth', function ($http, $q, mvIdentity,mvUser) {
    return {
        authenticateUser: authenticateUser,
        createUser:createUser,
        logout:logout
    };

    function authenticateUser(username, password) {
        var dfd = $q.defer();
        $http.post('/login', {username: username, password: password}).then(function (response) {
            if (response.data.success) {
                mvIdentity.currentUser = response.data.user;
                console.log(mvIdentity.currentUser)
                dfd.resolve(true);
            }
            else {
                dfd.resolve(false);
            }
        });

        return dfd.promise;
    }

    function createUser(userData){
        var newUser=new mvUser(userData);
        var dfd=$q.defer();

        newUser.$save().then(function(){
           mvIdentity.currentUser=newUser;
           dfd.resolve();
        },function(response){
            dfd.reject(response.data.reason);
        });
        return dfd.promise;
    }

    function logout(){
        var dfd=$q.defer();
        $http.post('/logout',{logout:true}).then(function(){
            mvIdentity.currentUser=undefined;
            dfd.resolve()
        });
        return dfd.promise;
    }
});
