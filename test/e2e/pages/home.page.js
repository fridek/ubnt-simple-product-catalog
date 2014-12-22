'use strict';

var HomePage = function() {
  this.get = function() {
    return browser.get('/');
  };
  this.title = element(by.id('title'));

  this.devicesTable = element(by.id('catalog__deviceTable'));

  this.devicesNoItems = element(by.id('catalog__no-items'));

  this.filterQueryInput = element(by.id('catalog__filterQuery'));

  this.cart = element(by.id('catalog__cart'));

  this.cartItems = this.cart.all(by.css('tbody tr'));

  this.itemRows = this.devicesTable.all(by.css('tbody tr'));
};

module.exports = HomePage;
