### Simple Product Catalog

This project is a part of the recruitment process for QA position in Krakow office of Ubiquiti Networks Polska.

Your task is to:

 * add karma unit tests for services, controllers and directives (5 in total);
 * add two protractor e2e test for catalog view;
 * send us a diff of your changes (patch is preferable) on [mailto:recruitment-cracow@ubnt.com](recruitment-cracow@ubnt.com).

### Prerequisites

 * `git`
 * `nodejs` [download](http://nodejs.org/)
 * `npm`

### Dependencies

 * `npm install -g bower-cli`
 * `npm install -g grunt`

### How to locally build the project

 * `git clone git@github.com:cholewczuk/ubnt-simple-product-catalog.git`
 * `cd ubnt-simple-product-catalog`
 * `npm install`
 * `bower install`
 * `grunt`

### How to locally run the project

 * `grunt`

### How to locally test the project

 * `grunt`
 * in new console `grunt test`

You can run single e2e suite by `grunt protractor --specs='test/e2e/views/author.e2e.js'`
