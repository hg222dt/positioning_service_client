// angular is a global namespace declared by angularJS
angular
  .module("positioning_service_client_app") // must match ng-app in HTML (this is the module - probobly same for whole application)
  .controller("LoginController", LoginController); // register our controller with name and "constructor" function

//PlayersController.$inject = ['$scope']; // inject the scope (no need if using controllerAs)



function LoginController() {
  // Using controllerAs so $scope is in this (save a ref in variable)
  var vm = this;
  var usersList = [
    {id: 1, name: "Harry Kane", age: 21, selfurl: "http://blue-white-harbor-95-185765.euw1-2.nitrousbox.com/demo02/players/1"},
    {id: 2, name: "Lotta Schelin", age: 28, selfurl: "http://blue-white-harbor-95-185765.euw1-2.nitrousbox.com/demo02/players/2"},
    {id: 3, name: "Hugo Loris", age: 27, selfurl:"http://blue-white-harbor-95-185765.euw1-2.nitrousbox.com/demo02/players/3" }
  ];
  
  // We can update the ViewModel (model in view)
  vm.currentPlayer = "";
  vm.idvalue = 1;
  
  // Also declare function
  vm.getUser = function() {
      console.log("HEPP");
      var result = usersList.filter(function(p) {
         return p.id.toString() === vm.idvalue.toString(); // filter out appropriate one, beware of type conversions with ===
      })[0]; // get result and access first property (should only be one....)


      window.alert("hejhej. användaren heter " + result.name);

      
      vm.currentPlayer = result; 

  }
}
