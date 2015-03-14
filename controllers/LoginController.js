
angular
  .module('positioning_service_client_app')
  .controller("LoginController", LoginController);

function LoginController() {

  var vm = this;
  var usersList = [
    {id: 1, name: "Harry Kane", age: 21, selfurl: "http://blue-white-harbor-95-185765.euw1-2.nitrousbox.com/demo02/players/1"},
    {id: 2, name: "Lotta Schelin", age: 28, selfurl: "http://blue-white-harbor-95-185765.euw1-2.nitrousbox.com/demo02/players/2"},
    {id: 3, name: "Hugo Loris", age: 27, selfurl:"http://blue-white-harbor-95-185765.euw1-2.nitrousbox.com/demo02/players/3" }
  ];
  
  vm.currentPlayer = "";
  vm.idvalue = 1;
  
  vm.getUser = function() {
      console.log("HEPP");
      var result = usersList.filter(function(p) {
         return p.id.toString() === vm.idvalue.toString();
      })[0];

      window.alert("hejhej. användaren heter " + result.name);
      
      vm.currentPlayer = result; 
  }
}
