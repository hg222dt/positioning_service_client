
(function() {

angular
  .module('positioning_service_client_app')
  .controller('MapController', MapController); 

  MapController.$inject = ['$scope'];

  function MapController($scope){ 
      var vm = this;
     
      var map;
      $scope.$on('mapInitialized', function(evt, evtMap) {
        map = evtMap;

        getDoodlesAsMarkers();

        vm.checkPosition = function(e) {
          console.log(e.latLng);
          var marker = new google.maps.Marker({position: e.latLng, map: map});
          map.panTo(e.latLng);
        };
      });


      function getDoodlesAsMarkers() {
        
      }

      return vm;
  }

})();