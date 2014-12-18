'use strict';

(function() {

  angular
    .module('ubntCatalogApp')
    .controller('CatalogCtrl', ['DeviceService', 'CartService', function (DeviceService, CartService) {
      var CatalogCtrl = function() {
        /**
         * Indicates fetch is in progress
         * @type {boolean}
         */
        this.isLoading = true;

        /**
         * List of fetched devices
         * @type {Device[]}
         */
        this.devices = DeviceService.devices;

        /**
         * Adds device to cart
         * @type {Function}
         */
        this.addDevice = CartService.addDevice.bind(CartService);

        DeviceService.fetchDevices().then(function(devices) {
          this.devices = devices;
          this.isLoading = false;
        }.bind(this));
      };

      return new CatalogCtrl();
    }]);

})();
