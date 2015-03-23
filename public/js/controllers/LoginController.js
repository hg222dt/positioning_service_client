
angular
  .module('positioning_service_client_app')
  .controller("LoginController", LoginController);

LoginController.$inject = ['UserService', '$scope', '$cookieStore', '$location', '$rootScope'];

function LoginController(UserService, $scope, $cookieStore, $location, $rootScope) {

  var vm = this;
  
  vm.currentPlayer = "";
  
  $scope.loginUser = function(userCredentials) {
    console.log("HEPP");

    //Try to log user in
    var userPromise = UserService.loginUser(userCredentials);

    userPromise
      .then(function(data){

        console.log(data);


        $rootScope.auth_token = data['auth_token'];
        $rootScope.userLoggedIn = true;
        $rootScope.loggedInUsername = data['end_user']['username'];
        $rootScope.loggedInId = data['end_user']['id'];



        // $cookieStore.put('auth_token', data['auth_token']);
        // $cookieStore.put('userLoggedIn', true);
        // $cookieStore.put('loggedInUsername', data['end_user']['username']);
        // $cookieStore.put('loggedInId', data['end_user']['id']);

        $location.path( "/doodles" );

      })
      .catch(function(error) {
        console.log("ERROR");
      });
  }
}