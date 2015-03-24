(function() {

  angular
    .module('positioning_service_client_app')
    .controller('MapController', MapController); 

  MapController.$inject = ['$scope', '$rootScope'];

  function MapController($scope, $rootScope){
    var vm = this;
   
    var map;
    $scope.$on('mapInitialized', function(evt, evtMap) {
      map = evtMap;

      

      vm.checkPosition = function(e) {

        if($rootScope.currentPositionMarker != null) {
          $rootScope.currentPositionMarker.setMap(null);
        }

        console.log(e.latLng);
        var marker = new google.maps.Marker({position: e.latLng, map: map});
        $rootScope.currentPositionMarker = marker;
      };
    });

    $rootScope.addmultipleMarkers = function(doodleArray)  {

        if($rootScope.markersArray != null) {
          for(var i=0; i<$rootScope.markersArray.length; i++) {
            $rootScope.markersArray[i].setMap(null);
          }

          if($rootScope.currentPositionMarker != null){
            $rootScope.currentPositionMarker.setMap(null);
          }

        }

        $rootScope.markersArray = [];

        for(var i=0; i<doodleArray.length; i++) {

          var lat = doodleArray[i].location.lat;
          var lng = doodleArray[i].location.lng;

          var marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});

          $rootScope.markersArray.push(marker);

        }

        if($rootScope.markersArray.length === 1) {
          var lat = $rootScope.markersArray[0].position.k;
          var lng = $rootScope.markersArray[0].position.D;

          var myLatlng = new google.maps.LatLng(lat, lng);
          map.panTo(myLatlng);
        }

      }

      $rootScope.removeAllMarkersFromMap = function() {

        if($rootScope.markersArray != null) {
          for(var i=0; i<$rootScope.markersArray.length; i++) {
            $rootScope.markersArray[i].setMap(null);
          }
        }

        if($rootScope.currentPositionMarker != null) {
          $rootScope.currentPositionMarker.setMap(null);
        }
      }    
  }
})();