'use strict';

(function () {

  angular
    .module('ubntCatalogApp')
    .directive('link', ['$location', function ($location) {
      return {
        template: '<li ng-class="{active: isActive()}"><a ng-href="/#{{path}}">{{name}}</a></li>',
        replace: true,
        restrict: 'E',
        scope: {
          path: '=linkRef',
          name: '=linkName'
        },
        link: function ($scope) {
          $scope.isActive = function() {
            return $location.path().substr(0, $scope.path.length) === $scope.path;
          };
        }
      };
    }]);

})();
