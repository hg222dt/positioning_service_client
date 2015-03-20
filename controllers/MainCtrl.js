(function() {

  angular
    .module('positioning_service_client_app') 
    .controller("MainCtrl", MainCtrl); 

  MainCtrl.$inject = ['$scope', '$cookieStore', '$rootScope', '$location'];

  function MainCtrl($scope, $cookieStore, $rootScope, $location) {

    $rootScope.isUserLoggedIn = function() {
      return $cookieStore.get('userLoggedIn');
    }

    $rootScope.logout = function() {

      $cookieStore.put('auth_token', "");
      $cookieStore.put('userLoggedIn', false); 

    }

  }

})();