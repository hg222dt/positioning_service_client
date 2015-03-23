(function() {

  angular
    .module('positioning_service_client_app') 
    .controller("ProfileController", ProfileController); 

  ProfileController.$inject = ['DoodlesService', '$scope', '$rootScope'];

  function ProfileController(DoodlesService, $scope, $rootScope) {

    var vm = this;

    var userDoodlesPromise = DoodlesService.getDoodlesForUser();

    userDoodlesPromise
      .then(function(data){
        console.log(data);

        angular.forEach(data, function(obj, index){
           obj.index = index;
        });

        vm.doodlesList = data;
        $rootScope.addmultipleMarkers(data);
      })
      .catch(function(error) {
        console.log("ERROR");
      }); 


      $scope.delete = function(doodleId, index) {

        var doodlePromise = DoodlesService.deleteDoodle(doodleId);

        doodlePromise
          .then(function(data){
            console.log(data);
            console.log(index);
            console.log(vm.doodlesList);

            vm.doodlesList.splice(index,1);
          })
          .catch(function(error) {
            console.log("ERROR");
          });
      }


      $scope.update = function(doodle, index) {

        var newDoodleText = prompt("Uppdatera doodlens text här.");

        if(newDoodleText != "" || newDoodleText !== null) {
          doodle.doodle_text = newDoodleText;
        }

        var doodlePromise = DoodlesService.updateDoodle(doodle);

        doodlePromise
          .then(function(data){


            vm.doodlesList[index] = doodle;

          })
          .catch(function(error) {
            console.log("ERROR");
          });
      }

      $scope.cardClick = function(doodle) {
        console.log("HEPP");
        $rootScope.addmultipleMarkers([doodle]);
      }
  }
})();