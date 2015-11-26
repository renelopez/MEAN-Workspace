angular.module('app').factory('mvAuth', function ($http, $q, mvIdentity) {
    return {
        authenticateUser: authenticateUser,
        logout:logout
    };

    function authenticateUser(username, password) {
        var dfd = $q.defer();
        $http.post('/login', {username: username, password: password}).then(function (response) {
            if (response.data.success) {
                mvIdentity.currentUser = response.data.user;
                dfd.resolve(true);
            }
            else {
                dfd.resolve(false);
            }
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
