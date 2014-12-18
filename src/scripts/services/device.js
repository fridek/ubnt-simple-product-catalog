'use strict';

(function () {

  /**
   * Device model id
   * @typedef {string} DeviceId
   */

  /**
   * Device model
   * @typedef {{id: DeviceId, name: string, image: string}} Device
   */

  /**
   * Mocked response with list of devices.
   * @type {Device[]}
   * @private
   */
  var fixtures_ = [
    {
      id: 'ubnt-0',
      name: 'EdgeRouter™ Lite',
      image: 'http://ubcdn.co/media/images/productgroup/edgerouter-lite/edgerouter-lite-small.png'
    },
    {
      id: 'ubnt-1',
      name: 'EdgeRouter™ PoE',
      image: 'http://ubcdn.co/media/images/productgroup/edgerouter-poe/edgerouter-poe-small.png'
    },
    {
      id: 'ubnt-2',
      name: 'EdgeRouter™',
      image: 'http://ubcdn.co/media/images/productgroup/edgerouter/edgerouter-small.png'
    },
    {
      id: 'ubnt-3',
      name: 'EdgeRouter™ PRO',
      image: 'http://ubcdn.co/media/images/productgroup/edgerouter-pro/edgerouter-pro-small.png'
    },
    {
      id: 'ubnt-4',
      name: 'EdgeSwitch',
      image: 'http://ubcdn.co/media/images/productgroup/edgeswitch/edgeswitch-small.png'
    }
  ];

  angular
    .module('ubntCatalogApp')
    .service('DeviceService', ['$q', '$timeout', function ($q, $timeout) {

      var DeviceService = function () {
        /**
         * Fetched and stored list of devices
         * @type {Device[]}
         */
        this.devices = [];

        /**
         * Indicates fetch is necessary
         * @type {boolean}
         * @private
         */
        this.isFetchDevices_ = true;
      };

      /**
       * Fetch devices if it is necessary
       * @returns {Promise.<Devices[]>}
       */
      DeviceService.prototype.fetchDevices = function () {
        var deferred = $q.defer();

        if (this.isFetchDevices_) {
          // Mock async request to server
          $timeout(function () {
            this.devices = fixtures_;
            deferred.resolve(this.devices);
          }.bind(this), 1000);
          this.isFetchDevices_ = false;
        } else {
          deferred.resolve(this.devices);
        }

        return deferred.promise;
      };

      return new DeviceService();
    }]);

})();
