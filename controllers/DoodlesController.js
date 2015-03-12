// angular is a global namespace declared by angularJS
angular
  .module("positioning_service_client_app") // must match ng-app in HTML (this is the module - probobly same for whole application)
  .controller("DoodlesController", DoodlesController); // register our controller with name and "constructor" function

//PlayersController.$inject = ['$scope']; // inject the scope (no need if using controllerAs)



function DoodlesController() {
  // Using controllerAs so $scope is in this (save a ref in variable)
  var vm = this;
  
  // We can update the ViewModel (model in view)
  vm.currentPlayer = "";
  vm.idvalue = 1;
  
  // Also declare function
  vm.getAllDoodles = function() {
      
      //Call API - attach api-key in header - Retrieve data.




      vm.currentPlayer = result; 
  }
}


//BYGG SERVICE TILL DETTA