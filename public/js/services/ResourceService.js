(function() {

  angular
    .module('positioning_service_client_app')
    .factory('ResourceService', ResourceService);

  ResourceService.$inject = ['$http', 'API', '$cookieStore', '$rootScope'];

  function ResourceService($http, API, $cookieStore, $rootScope) {

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
                'Authorization': "Bearer " + $rootScope.auth_token
            },
            params: {
            },
            data : data
        };

        console.log(API.key);
        console.log($rootScope.auth_token);

        return $http(req).then(function(response) {
          var result = [];

          angular.forEach(response.data, function(value, key) {
            result[key] = new Resource(value);
          });

          return response.data;
        });

      }

      Resource.deleteDoodle = function(collectionName) {
        var req = {
            method: 'DELETE',
            url: API.url + collectionName + ".json",
            headers: {
                'Accept': API.format,
                'apikey': API.key,
                'Authorization': "Bearer " + $rootScope.auth_token
            },
            params: {
            }
        };

        return $http(req).then(function(response) {
          var result = [];

          angular.forEach(response.data, function(value, key) {
            result[key] = new Resource(value);
          });

          return response.data;
        });

      }

      Resource.putDoodle = function(collectionName, data) {

        var req = {
            method: 'PUT',
            url: API.url + collectionName + ".json",
            headers: {
                'Accept': API.format,
                'apikey': API.key,
                'Authorization': "Bearer " + $rootScope.auth_token
            },
            params: {
            },
            data: {
              'doodle_text': data.doodle_text
            }
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