(function() {
// angular is a global namespace declared by angularJS
angular
  .module("positioning_service_client_app") // must match ng-app in HTML (this is the module - probobly same for whole application)
  .controller("DoodlesListController", DoodlesListController); // register our controller with name and "constructor" function

//PlayersController.$inject = ['$scope']; // inject the scope (no need if using controllerAs)

// inject the service
DoodlesListController.$inject = ['DoodlesService'];

function DoodlesListController() {
  // Using controllerAs so $scope is in this (save a ref in variable)
  var vm = this;
  
/*

  // call the service get a promise back
  var doodlesPromise = DoodlesService.getAll();

  // then is called when the function delivers
  doodlesPromise
      .then(function(data){
        // put the data om the viewModel - binding it to the view
        vm.doodlesList = data;
      })
      .catch(function(error) {
        console.log("ERROR");
      });

      return vm.doodlesList;
*/



  var doodlesList = [
      {id: 1, description: "Harry Kane"},
      {id: 2, description: "Lotta Schelin"},
      {id: 3, description: "Hugo Loris"}
    ];
  
  // We can update the ViewModel (model in view)
  vm.currentDoodle = "";
  vm.idvalue = 1;
  
  // Also declare function
  vm.getAllDoodles = function() {
      
      // Call API - attach api-key in header - Retrieve data.


      var result = doodlesList.filter(function(d) {
         return d.id.toString() === vm.idvalue.toString(); // filter out appropriate one, beware of type conversions with ===
      })[0]; // get result and access first property (should only be one....)
      
      

    return doodlesList;

    
  }
  
}


//BYGG SERVICE TILL DETTA
})();