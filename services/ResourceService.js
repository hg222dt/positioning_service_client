(function() {

  angular
    .module('positioning_service_client_app')
    .factory('ResourceService', ResourceService);

  ResourceService.$inject = ['$http', 'API'];

  function ResourceService($http, API) {

    return function (collectionName) {
    
      var Resource = function(data) {
        angular.extend(this, data);
      }
        
      Resource.getCollection = function() {

        var req = {
            method: 'GET',
            url: API.url + collectionName + ".json",
            headers: {
                'Accept': API.format,
                'apikey': API.key
            },
            params: {
                'offset': '0',
                'limit': '20'
            }
        };

        return $http(req).then(function(response) {
          var result = [];

          angular.forEach(response.data, function(value, key) {
            result[key] = new Resource(value); 
          });

          return result;
        });
      };


      Resource.getFilteredCollection = function() {

        var req = {
            method: 'GET',
            url: API.url + collectionName + ".json",
            headers: {
                'Accept': API.format,
                'apikey': API.key
            },
            params: {
                'offset': '0',
                'limit': '20'
            }
        };

        return $http(req).then(function(response) {
          var result = [];

          angular.forEach(response.data, function(value, key) {
            result[key] = new Resource(value); 
          });
          return result;
        });

      }


      Resource.POST = function(collectionName, data) {
        var req = {
            method: 'POST',
            url: API.url + collectionName + ".json",
            headers: {
                'Accept': API.format,
                'apikey': API.key
            },
            params: {
            },
            data : data
        };

        return $http(req).then(function(response) {
          var result = [];

          angular.forEach(response.data, function(value, key) {
            result[key] = new Resource(value);
          });

          return response.data;
        });

      }

      return Resource;
    }
  }

})();