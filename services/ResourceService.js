(function() {

  angular
    .module('positioning_service_client_app')
    .factory('ResourceService', ResourceService);

  ResourceService.$inject = ['$http', 'API', '$cookieStore'];

  function ResourceService($http, API, $cookieStore) {

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

      Resource.getCollectionFromUser = function(collectionName) {

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


      Resource.postUser = function(collectionName, data) {
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

      Resource.postDoodle = function(collectionName, data) {
        var req = {
            method: 'POST',
            url: API.url + collectionName + ".json",
            headers: {
                'Accept': API.format,
                'apikey': API.key,
                'Authorization': "Bearer " + $cookieStore.get('auth_token')
            },
            params: {
            },
            data : data
        };

        console.log(API.key);
        console.log($cookieStore.get('auth_token'));

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