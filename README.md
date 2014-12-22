### Simple Product Catalog

This project is a part of the recruitment process for JavaScript Developer position in Krakow office of Ubiquiti Networks Polska.

Your task is to:

 * add filtering by product name to the catalog
 * add drag and drop to the basket
 * add karma unit tests for your code
 * send us a diff of your changes (patch is preferable) to [recruitment-cracow@ubnt.com](recruitment-cracow@ubnt.com).
 
 There are protractor tests ready to help you verify your solution. Feel free to adjust them if needed, but please try
 to maintain the coverage.
 You are allowed to include any additional packages you may find helpful in solving the problem. 
 In such case quality and scope of the package will be evaluated too.

### Prerequisites

 * `git`
 * `nodejs` [download](http://nodejs.org/)
 * `npm`

### Dependencies

 * `npm install -g bower`
 * `npm install -g grunt-cli`

### How to locally build the project

 * `git clone https://github.com/cholewczuk/ubnt-simple-product-catalog.git`
 * `cd ubnt-simple-product-catalog`
 * `git checkout developer` 
 * `npm install`
 * `bower install`
 * `grunt`

### How to locally run the project

 * `grunt`

### How to locally test the project

 * `grunt`
 * in new console `grunt test`

You can run single e2e suite by `grunt protractor --specs='test/e2e/views/author.e2e.js'`
