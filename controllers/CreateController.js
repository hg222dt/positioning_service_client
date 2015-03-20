
angular
  .module('positioning_service_client_app')
  .controller("CreateController", CreateController);


CreateController.$inject = ['DoodlesService', '$scope', '$rootScope'];

function CreateController(DoodlesService, $scope, $rootScope) {

  var vm = this;
  
  vm.currentPlayer = "";
  
  $scope.registerUser = function(regCredentials) {
    console.log("HEPP");

    //Try to log user in
    var userPromise = UserService.createNewUser(regCredentials);

    userPromise
      .then(function(data){
        console.log(data);

      })
      .catch(function(error) {
        console.log("ERROR");
      });
  }
}
