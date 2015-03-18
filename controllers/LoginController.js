
angular
  .module('positioning_service_client_app')
  .controller("LoginController", LoginController);

function LoginController() {

  var vm = this;
  
  vm.currentPlayer = "";
  
  vm.loginUser = function() {
      console.log("HEPP");


      // var result = usersList.filter(function(p) {
      //    return p.id.toString() === vm.idvalue.toString();
      // })[0];

      // window.alert("hejhej. användaren heter " + result.name);
      
      // vm.currentPlayer = result; 
  }
}
