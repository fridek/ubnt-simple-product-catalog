'use strict';

var AuthorPage = require('../pages/author.page.js');

/**
 * This e2e test is completed.
 */
describe('Author view', function () {

  it('should display the author full name', function () {
    var authorPage = new AuthorPage();
    authorPage.get().then(function() {
      var author = authorPage.author.getText();
      expect(author).toBe('Piotr Cholewczuk');
    });
  });

});
