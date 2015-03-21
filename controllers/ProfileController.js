(function() {

  angular
    .module('positioning_service_client_app') 
    .controller("ProfileController", ProfileController); 

  ProfileController.$inject = ['DoodlesService', '$scope'];

  function ProfileController(DoodlesService, $scope) {

    var vm = this;

    var userDoodlesPromise = DoodlesService.getDoodlesForUser();

    userDoodlesPromise
      .then(function(data){
        console.log(data);

        angular.forEach(data, function(obj, index){
           obj.index = index;
        });

        vm.doodlesList = data;
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

  }
})();