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
        console.log(e.latLng);
        var marker = new google.maps.Marker({position: e.latLng, map: map});
        // map.panTo(e.latLng);
      };

    });

    $rootScope.addmultipleMarkers = function(doodleArray)  {

        for(var i=0; i<doodleArray.length; i++) {

          var lat = doodleArray[i].location.lat;
          var lng = doodleArray[i].location.lng;

          var marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});

        }

      };

    
  }
  
})();