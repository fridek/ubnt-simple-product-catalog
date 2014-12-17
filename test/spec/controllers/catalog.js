'use strict';

describe('Controller: CatalogCtrl', function () {

  // Load the controller's module
  beforeEach(module('ubntCatalogApp'));

  var CatalogCtrl,
      $timeout;

  // Initialize the controller
  beforeEach(inject(function ($controller, _$timeout_) {
    CatalogCtrl = $controller('CatalogCtrl');
    $timeout = _$timeout_;
  }));

  it('should contain a list of devices', function () {
    $timeout.flush();
    expect(CatalogCtrl.devices.length).toBe(5);
  });

});
