
angular
  .module('positioning_service_client_app')
  .controller("LoginController", LoginController);

LoginController.$inject = ['UserService', '$scope', '$cookieStore', '$location', '$rootScope'];

function LoginController(UserService, $scope, $cookieStore, $location, $rootScope) {

  var vm = this;
  
  vm.currentPlayer = "";
  vm.userMessage = "";
  
  $scope.loginUser = function(userCredentials) {

    //Form validation
    if($scope.loginCred == null) {
      $scope.userMessage = "Du måste fylla i dina uppgifter";
    } else if($scope.loginCred.email == null || $scope.loginCred.email == "") {
      $scope.userMessage = "Du måste fylla i epost-adress";
    } else if($scope.loginCred.password == null || $scope.loginCred.password == "") {
      $scope.userMessage = "Du måste fylla i lösenord";
    } else {



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
          console.log(error);

          if(error.data.user_message_id === 1) {
            $scope.userMessage = "Epost-adressen eller lösnordet är inte korrekt";
          }

        });
    }
  }
}
