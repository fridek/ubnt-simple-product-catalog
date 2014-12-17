'use strict';

/**
 * This unit test is completed.
 */
describe('Controller: AboutCtrl', function () {

  // Load the controller's module
  beforeEach(module('ubntCatalogApp'));

  var AboutCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    AboutCtrl = $controller('AboutCtrl');
  }));

  it('should attach the author name', function () {
    expect(AboutCtrl.author).toBe('Piotr Cholewczuk');
  });

});
