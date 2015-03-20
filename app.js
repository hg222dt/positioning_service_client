(function() {

  angular
    .module('positioning_service_client_app', ['ngRoute', 'LocalStorageModule', 'ngMap', 'ngCookies'])
    .config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'partials/index.html'
          }).
          when('/doodles', {
            templateUrl: 'partials/search-area.html',
            controller: 'DoodlesListController',
            controllerAs: 'doodlesCtrl'
          }).
          when('/login', {
            templateUrl: 'partials/login-area.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
          }).
          when('/registration', {
            templateUrl: 'partials/registration-area.html',
            controller: 'RegistrationController',
            controllerAs: 'registrationCtrl'
          }).
          when('/create', {
            templateUrl: 'partials/create-area.html',
            controller: 'CreateController',
            controllerAs: 'createCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
        
        // $locationProvider.html5Mode(true);
    }])
    .config(function (localStorageServiceProvider) {
      localStorageServiceProvider
          .setPrefix('positioning_service_client_app')
          .setStorageType('sessionStorage')
          .setNotify(true, true)
    })
    .constant('LocalStorageConstants', {
      'doodlesKey' : 'd'
    })
    .constant('API', {
        'key': "b73c7bd31eda0f56af490a146fd589d4",
        'url': "http://localhost:3000/api/v1/",
        'format': 'application/json'
    })
    .controller('MainCtrl', function($scope) {
      console.log("HEPP");
    });
})();