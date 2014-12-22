'use strict';

var HomePage = require('../pages/home.page.js');

describe('Catalog view', function () {

  var homePage = new HomePage();

  it('should display the app name', function () {
    homePage.get().then(function() {
      expect(homePage.title.getText()).toBe('Simple Product Catalog');
    });
  });

  it('should render all 5 items from mocked service', function () {
    homePage.get().then(function() {
      expect(homePage.itemRows.count()).toBe(5);

      expect(homePage.devicesNoItems.isDisplayed()).toBeFalsy();
      expect(homePage.devicesTable.isDisplayed()).toBeTruthy();
    });
  });

  describe('catalog filter', function() {
    it('should filter on query', function () {
      homePage.get().then(function() {
        homePage.filterQueryInput.sendKeys("Lite").then(function() {
          expect(homePage.itemRows.count()).toBe(1);
        });
      });
    });

    it('should ignore casing in query', function () {
      homePage.get().then(function() {
        homePage.filterQueryInput.sendKeys("lite").then(function() {
          expect(homePage.itemRows.count()).toBe(1);
        });
      });
    });

    it('should render empty list info', function () {
      homePage.get().then(function() {
        homePage.filterQueryInput.sendKeys("Bulbasaur").then(function() {
          expect(homePage.devicesNoItems.isDisplayed()).toBeTruthy();
          expect(homePage.devicesTable.isDisplayed()).toBeFalsy();
        });
      });
    });
  });

  describe('drag and drop', function() {
    // Unfortunately selenium has a century old bug about HTML5 drag and drop events
    // https://code.google.com/p/selenium/issues/detail?id=3604
    // Bonus points for finding a way around this issue :)
    xit('should add items to the cart', function() {
      homePage.get().then(function() {
        browser
          .actions()
          .dragAndDrop(homePage.itemRows.first(), homePage.cart)
          .perform();
        browser.sleep(1000);
        expect(homePage.cartItems.count()).toBe(1);
      });
    });
  });
});
