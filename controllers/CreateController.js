
angular
  .module('positioning_service_client_app')
  .controller("CreateController", CreateController);


CreateController.$inject = ['DoodlesService', '$scope', '$rootScope'];

function CreateController(DoodlesService, $scope, $rootScope) {

  var vm = this;
  
  vm.currentPlayer = "";
  
  $scope.sendDoodle = function(doodle) {
    console.log("HEPP");

    doodle.lat = 1.1111;
    doodle.long = 2.2222;

    //Try to log user in
    var doodlePromise = DoodlesService.saveDoodle(doodle);

    doodlePromise
      .then(function(data){
        console.log(data);

      })
      .catch(function(error) {
        console.log("ERROR");
      });
  }
}
