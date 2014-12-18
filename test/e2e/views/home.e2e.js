'use strict';

var HomePage = require('../pages/home.page.js');

describe('Home view', function () {

  it('should display the app name', function () {
    var homePage = new HomePage();
    homePage.get().then(function() {
      expect(homePage.title.getText()).toBe('Simple Product Catalog');
    });
  });

});
