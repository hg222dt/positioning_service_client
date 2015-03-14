
angular
  .module('positioning_service_client_app')
  .controller("DoodlesController", DoodlesController);

//PlayersController.$inject = ['$scope']; // inject the scope (no need if using controllerAs)



function DoodlesController() {
  var vm = this;
  
  vm.currentPlayer = "";
  vm.idvalue = 1;
  
  vm.getAllDoodles = function() {
      
      //Call API - attach api-key in header - Retrieve data.
      vm.currentPlayer = result; 
  }
}