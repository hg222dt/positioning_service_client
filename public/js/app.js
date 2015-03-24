// angular
//   .module("demo4App", ['ngRoute']) // you must inject the ngRoute (included as a separate js-file)
//   .config(['$routeProvider', '$locationProvider',
//     function($routeProvider, $locationProvider) {
//       $routeProvider.
//         when('/', {
//           templateUrl: '/partials/index.html'
//         }).
//         when('/players', {
//           templateUrl: '/partials/player-list.html',
//           controller: 'PlayerListController',
//           controllerAs: 'players' // players could be seen as an instance of the controller, use it in the view!
//         }).
//         when('/player/:id', {
//           templateUrl: '/partials/player-detail.html',
//           controller: 'PlayerDetailController',
//           controllerAs: 'player'
//         }).
//         otherwise({
//           redirectTo: '/'
//         });
//       $locationProvider.html5Mode(true); // This removes the hash-bang and use the Session history management >= IE10

//     }]);


(function() {

  angular
    .module('positioning_service_client_app', ['ngRoute', 'LocalStorageModule', 'ngMap', 'ngCookies', 'ngFooter'])
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
          when('/profile', {
            templateUrl: 'partials/profile-area.html',
            controller: 'ProfileController',
            controllerAs: 'profileCtrl'
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