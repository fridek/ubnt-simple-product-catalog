'use strict';

(function () {

  angular
    .module('ubntCatalogApp')
    .directive('cart', function (CartService) {
      return {
        templateUrl: 'views/cart.html',
        replace: true,
        restrict: 'E',
        link: function ($scope) {
          $scope.isEmpty = CartService.isEmpty.bind(CartService);
          /**
           * List of products in cart
           * @type {ProductMap}
           */
          $scope.products = CartService.products;
          /**
           * Removes from cart all devices with given id
           * @type {Function}
           */
          $scope.removeDevice = CartService.removeDevice.bind(CartService);
        }
      };
    });

})();
