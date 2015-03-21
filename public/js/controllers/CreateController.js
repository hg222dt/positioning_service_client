
angular
  .module('positioning_service_client_app')
  .controller("CreateController", CreateController);


CreateController.$inject = ['DoodlesService', '$scope', '$rootScope'];

function CreateController(DoodlesService, $scope, $rootScope) {

  var vm = this;
  
  vm.currentPlayer = "";
  
  $scope.sendDoodle = function(doodle) {

    console.log("HEPP");
    console.log($rootScope.currentPositionMarker);
    console.log("HEPP");

    doodle.lat = $rootScope.currentPositionMarker.position.k;
    doodle.long = $rootScope.currentPositionMarker.position.D;

    var doodlePromise = DoodlesService.saveDoodle(doodle);

    doodlePromise
      .then(function(data){
        console.log(data);

        $rootScope.currentPositionMarker.setMap(null);

      })
      .catch(function(error) {
        console.log("ERROR");
      });
  }
}
