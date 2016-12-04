(function(){

    angular.module('starter')
    .service('RequestsService', ['$http', '$q', '$ionicLoading',  RequestsService]);

    function RequestsService($http, $q, $ionicLoading){

        //var base_url = 'http://{YOUR SERVER}';
        //var base_url = 'http://192.168.0.104:8100/';
        var base_url = 'http://192.168.0.104:3000/';

        function register(device_token){
            alert("Registro "+device_token);
            var deferred = $q.defer();
            $ionicLoading.show();

            $http.post(base_url + '/register', {'device_token': device_token})
                .success(function(response){
                    alert("Pues segun el post jalo...???");
                    $ionicLoading.hide();
                    deferred.resolve(response);

                })
                .error(function(data){
                    alert("E R R O R"+data);
                    deferred.reject();
                });


            return deferred.promise;

        };


        return {
            register: register
        };
    }

})();
