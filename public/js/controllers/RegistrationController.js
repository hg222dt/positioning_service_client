
angular
  .module('positioning_service_client_app')
  .controller("RegistrationController", RegistrationController);


RegistrationController.$inject = ['UserService', '$scope'];

function RegistrationController(UserService, $scope) {

  var vm = this;


      
    $scope.registerUser = function(regCredentials) {
      
          //Form validation
      if($scope.registrationCred == null) {
        $scope.userMessage = "Du måste fylla i dina uppgifter";
      } else if($scope.registrationCred.username == null || $scope.registrationCred.username == "") {
        $scope.userMessage = "Du måste fylla i användarnamn";
      } else if($scope.registrationCred.email == null || $scope.registrationCred.email == "") {
        $scope.userMessage = "Du måste fylla i epost";
      } else if($scope.registrationCred.password == null || $scope.registrationCred.password == "") {
        $scope.userMessage = "Du måste fylla i lösenord";
      } else if($scope.registrationCred.password != $scope.registrationCred.passwordConfirm) {
        $scope.userMessage = "Lösenorden matchar inte"; 
      } else {

        //Try to log user in
        var userPromise = UserService.createNewUser(regCredentials);

        userPromise
          .then(function(data){
            console.log(data);
            $scope.userMessage = "Kontot skapades!";

          })
          .catch(function(error) {
            console.log(error);
            if(error.data.error_message_id == 1) {
              console.log("upptaget användarnamn");
              $scope.userMessage = "Användarnamnet är upptaget";
            } else if(error.data.error_message_id == 2) {
              $scope.userMessage = "Epost-adressen är upptagen";
            }
          });

      }
  }
}
