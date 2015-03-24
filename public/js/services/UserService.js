(function() {

angular
  .module('positioning_service_client_app')
  .factory('UserService', UserService);

  UserService.$inject = ['ResourceService', '$q'];

  function UserService(Resource, $q) {

    var User = Resource('end_users');

    return {
      loginUser:function(userCredentials) {


        var deferred = $q.defer();

        var promise;


        var data = {};
        var response;

        data['email'] = userCredentials.email;
        data['password'] = userCredentials.password;

        var jsonData = JSON.stringify(data);
    
        promise = User.postUser('api_auth', jsonData);


        // .then(function(data) {
        //   response = data;
        //   deferred.resolve(data);
        // });




        promise.success(function(data){

          // resolve the data to the caller
          deferred.resolve(data);

        }).catch(function(data){
          // If something went wrong we have to reject the promise (the caller will catch an error)
          deferred.reject(data);
        });




        return deferred.promise;

        
      },
      createNewUser:function(regCredentials) {

        var data = {};

        data['end_user'] = {};
        data['end_user']['username'] = regCredentials.username;
        data['end_user']['email'] = regCredentials.email;
        data['end_user']['password'] = regCredentials.password;
        data['end_user']['password_confirmation'] = regCredentials.passwordConfirm;
        data['end_user']['bio_text'] = "";

        var jsonData = JSON.stringify(data);

        var deferred = $q.defer();
    
        var promise = User.postUser('user', jsonData);

        // .then(function(data) {
        //   console.log(data);
        // });

        promise.success(function(data){

          // resolve the data to the caller
          deferred.resolve(data);

        }).catch(function(data){
          // If something went wrong we have to reject the promise (the caller will catch an error)
          deferred.reject(data);
        });

        return deferred.promise;
        // return promise;
        
      }
    }

  }
})();