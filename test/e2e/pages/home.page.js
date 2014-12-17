'use strict';

var HomePage = function() {
  this.get = function() {
    return browser.get('/');
  };
  this.title = element(by.id('title'));
};

module.exports = HomePage;
