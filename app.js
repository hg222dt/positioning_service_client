(function() {
// create the module
angular
  .module("positioning_service_client_app", ['ngRoute', 'LocalStorageModule'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'partials/index.html'
        }).
        when('/doodles', {
          templateUrl: 'partials/doodles-list.html',
          controller: 'DoodlesListController',
          controllerAs: 'doodles' // players could be seen as an instance of the controller, use it in the view!
        }).
        otherwise({
          redirectTo: '/'
        });
      
      $locationProvider.html5Mode(true); // This removes the hash-bang and use the Session history management >= IE10
    }])
    .config(function (localStorageServiceProvider) {
      // The module give me some stuff to configure
      localStorageServiceProvider
          .setPrefix('positioning_service_client_app')
          .setStorageType('sessionStorage')
          .setNotify(true, true)
    })
    .constant('API', { // here I also can declare constants
      'key': "f4d83ad593d6058eecb44d36cf1af5c9", // bad practice!? Key on client....
      'url': "http://localhost:3000/api/v1/", // base url
      'format': 'application/json' // Default representation we want
    })
    .constant('LocalStorageConstants', {
      'doodlesKey' : 'd', // just some keys for sessionStorage-keys
    });

})();