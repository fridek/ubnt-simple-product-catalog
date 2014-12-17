module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-route/angular-route.js',
      'src/scripts/**/*.js',
      'test/spec/**/*.js'
    ],
    exclude: [],
    port: 8080,
    browsers: [
      'Chrome'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],
    colors: true,
    logLevel: config.LOG_INFO
  });
};
