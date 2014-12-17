'use strict';

(function() {

  angular
    .module('ubntCatalogApp')
    .controller('CatalogCtrl', function (DeviceService, CartService) {
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
       * List of products in cart
       * @type {ProductMap}
       */
      this.products = CartService.products;

      /**
       * Adds device to cart
       * @type {Function}
       */
      this.addDevice = CartService.addDevice.bind(CartService);

      /**
       * Removes from cart all devices with given id
       * @type {Function}
       */
      this.removeDevice = CartService.removeDevice.bind(CartService);

      DeviceService.fetchDevices().then(function(devices) {
        this.devices = devices;
        this.isLoading = false;
      }.bind(this));
    });

})();
