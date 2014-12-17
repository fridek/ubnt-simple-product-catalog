'use strict';

var AuthorPage = function() {
  this.get = function() {
    return browser.get('/#/about');
  };
  this.author = element(by.id('author'));
};

module.exports = AuthorPage;
