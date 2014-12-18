'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    connect: {
      run: {
        options: {
          port: 9000,
          keepalive: true,
          base: 'build',
          open: true
        }
      }
    },
    
    clean: {
      build: ['build']
    },

    copy: {
      sources: {
        cwd: 'src/',
        expand: true,
        src: ['**'],
        dest: 'build/'
      },
      components: {
        cwd: 'bower_components/',
        expand: true,
        src: [
          '**/angular.js', 
          '**/angular-animate.js',
          '**/angular-route.js', 
          '**/bootstrap/dist/**',
          '**/jquery/dist/*'
        ],
        dest: 'build/components'
      }
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    protractor: {
      options: {
        configFile: 'test/protractor.conf.js',
        keepAlive: true
      },
      run: {}
    }
  });

  grunt.registerTask('test', [
    'karma',
    'protractor:run'
  ]);

  grunt.registerTask('default', [
    'clean:build',
    'copy:sources',
    'copy:components',
    'connect:run'
  ]);
};
