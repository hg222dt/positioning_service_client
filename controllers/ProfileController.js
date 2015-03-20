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
        vm.doodlesList = data;
      })
      .catch(function(error) {
        console.log("ERROR");
      }); 
  }
})();