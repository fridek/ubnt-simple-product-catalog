'use strict';

(function() {

  angular
    .module('ubntCatalogApp')
    .service('CartService', function () {

      /**
       * Product used to store quantity and Device
       * @typedef {device: Device, quantity: number} Product
       */

      /**
       * Map of products
       * @typedef {Object.<DeviceId, Product>} ProductMap
       */

      var CartService = function() {
        /**
         * Map of devices where key is id and value
         * @type ProductMap
         */
        this.products = {};
      };

      /**
       * Checks is cart empty
       * @returns {boolean}
       */
      CartService.prototype.isEmpty = function() {
        return Object.keys(this.products).length === 0;
      };

      /**
       * Adds device to cart
       * @param {Device} device
       */
      CartService.prototype.addDevice = function (device) {
        if(this.products[device.id]) {
          this.products[device.id].quantity++;
        } else {
          this.products[device.id] = {
            device: device,
            quantity: 1
          };
        }
      };

      /**
       * Removes from cart all devices with given id
       * @param {DeviceId} deviceId
       */
      CartService.prototype.removeDevice = function(deviceId) {
        delete this.products[deviceId];
      };

      return new CartService();
    });

})();
