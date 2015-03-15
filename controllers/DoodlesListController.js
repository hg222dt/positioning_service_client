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

      vm.getDoodlesByTag = function() {
      
        var result = vm.doodlesList.filter(function(d) {
           return d.id.toString() === vm.idvalue.toString(); // filter out appropriate one, beware of type conversions with ===
        })[0]; // get result and access first property (should only be one....)
        
        vm.currentDoodles = result; 
      }
  }

})();