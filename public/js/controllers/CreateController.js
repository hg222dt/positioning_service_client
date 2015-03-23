
angular
  .module('positioning_service_client_app')
  .controller("CreateController", CreateController);


CreateController.$inject = ['DoodlesService', '$scope', '$rootScope'];

function CreateController(DoodlesService, $scope, $rootScope) {

  var vm = this;
  
  vm.currentPlayer = "";

  $rootScope.removeAllMarkersFromMap();

  $scope.sendDoodle = function(doodle) {

    if($rootScope.currentPositionMarker === undefined) {
      alert("Du måste välja en position på din doodle. Klicka på kartan var du vill placera den.");
    } else {

      doodle.lat = $rootScope.currentPositionMarker.position.k;
      doodle.long = $rootScope.currentPositionMarker.position.D;

      var doodlePromise = DoodlesService.saveDoodle(doodle);

      doodlePromise
        .then(function(data){
          console.log(data);

          alert("Grattis doodlen skickades!");

          $scope.doodle.text = "";
          $scope.doodle.tag_name = "";

        })
        .catch(function(error) {
          console.log("ERROR");
        });


    }
  }
}
