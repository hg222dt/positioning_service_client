(function() {

  angular
    .module('positioning_service_client_app') 
    .controller("DoodlesListController", DoodlesListController); 

  DoodlesListController.$inject = ['DoodlesService', '$scope', '$rootScope'];

  function DoodlesListController(DoodlesService, $scope, $rootScope) {


    

    var vm = this;
    var allDoodlesPromise = DoodlesService.getAll();

    allDoodlesPromise
      .then(function(data){
        console.log(data);
        vm.doodlesList = data;
        $rootScope.doodlesList = data;
        $rootScope.addmultipleMarkers(data);
      })
      .catch(function(error) {
        console.log("ERROR");
      });

/*
      vm.getDoodlesByTag = function() {
      
        var result = vm.doodlesList.filter(function(d) {
           return d.id.toString() === vm.idvalue.toString(); // filter out appropriate one, beware of type conversions with ===
        })[0]; // get result and access first property (should only be one....)
        
        vm.currentDoodles = result; 
      }
*/


 //     $scope.master = {};


      $scope.send = function(query) {

        var filterDoodlesPromise = DoodlesService.getFilteredDoodles(query);

        $scope.master = angular.copy(query);

        filterDoodlesPromise
          .then(function(data){
            console.log(data);
            vm.doodlesList = data;
            // console.log(data);
            $rootScope.addmultipleMarkers(data);
          })
          .catch(function(error) {
            console.log("ERROR");
          });

      };

      $scope.data = { };


      $scope.changeHandler = function() {
        
        // console.log($scope.data.filteredItems);
        // $rootScope.addmultipleMarkers($scope.data.filteredItems);

      }

      $scope.cardClick = function(doodle) {
        $rootScope.addmultipleMarkers([doodle]);
      }


      // console.log($scope.filteredItems);

      // $scope.myFilter = function(item) {
      //   console.log($scope.data.filteredItems);
      //   // console.log("HEPP");

      //   return true;
      // }

      // $scope.$watch(function(scope) { return scope.data.filteredItems },
      //   function() {}
      //  );



      // $scope.master = {firstName: "John", lastName: "Doe"};
  }

})();