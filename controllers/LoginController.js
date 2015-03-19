
angular
  .module('positioning_service_client_app')
  .controller("LoginController", LoginController);

LoginController.$inject = ['UserService', '$scope', '$cookieStore'];

function LoginController(UserService, $scope, $cookieStore) {

  var vm = this;
  
  vm.currentPlayer = "";
  
  $scope.loginUser = function(userCredentials) {
    console.log("HEPP");

    //Try to log user in
    var userPromise = UserService.loginUser(userCredentials);

    userPromise
      .then(function(data){

        $cookieStore.put('auth_token', data['auth_token']);
        $cookieStore.put('userLoggedIn', true);

        // console.log($cookieStore.get('auth_token'));
        // console.log($cookieStore.get('userLoggedIn'));

      })
      .catch(function(error) {
        console.log("ERROR");
      });
  }
}
