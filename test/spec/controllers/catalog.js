'use strict';

describe('Controller: CatalogCtrl', function () {

  // Load the controller's module
  beforeEach(module('ubntCatalogApp'));

  var CatalogCtrl,
      $timeout;

  // Initialize the controller
  beforeEach(inject(function ($controller, $injector) {
    CatalogCtrl = $controller('CatalogCtrl');
    $timeout = $injector.get('$timeout');
  }));

  it('should contain a list of devices', function () {
    $timeout.flush();
    expect(CatalogCtrl.devices.length).toBe(5);
  });

});
