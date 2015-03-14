(function() {
angular
  .module('positioning_service_client_app') 
  .controller("DoodlesListController", DoodlesListController); 

DoodlesListController.$inject = ['DoodlesService'];

function DoodlesListController(DoodlesService) {

  var vm = this;
  var doodlesPromise = DoodlesService.getAll();

    doodlesPromise
        .then(function(data){
          vm.doodlesList = data;
        })
        .catch(function(error) {
          console.log("ERROR");
        });

      vm.doodlesList;  

}

})();