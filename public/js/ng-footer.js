angular.module('ngFooter', [])
.controller('directive-controller', ['$scope', function($scope) {
  $scope.copyright = {
    name: 'Henke',
    email: 'henke@cooldude.se'
  };

  
}])
.directive('myCopyright', function() {
  return {
    template: htmlTemplate
  };
});


var htmlTemplate  =   "<div class='footer'><p>Copyright: {{copyright.name}} - Email: {{copyright.email}}</p></div>";

