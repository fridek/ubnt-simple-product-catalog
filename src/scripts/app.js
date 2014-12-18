'use strict';

(function() {

  angular
    .module('ubntCatalogApp', [
      'ngAnimate',
      'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/catalog', {
          templateUrl: 'views/catalog.html',
          controller: 'CatalogCtrl as Catalog'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl as About'
        })
        .otherwise({
          redirectTo: '/catalog'
        });
    }]);

})();
