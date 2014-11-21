'use strict';

module.exports = function(grunt) {

  //Load NPM tasks
  require('load-grunt-tasks')(grunt);

  // Project Configuration
  grunt.initConfig({
    shell: {
      browserify: {
        options: {
          stdout: true,
          stderr: true
        },
        command: grunt.option('target') === 'dev' ?
            './browser/build; docco lib/* ' : './browser/build'
      }
    },
    watch: {
      readme: {
        files: ['README.md', 'CONTRIBUTING.md'],
        tasks: ['markdown']
      },
      scripts: {
        files: ['**/*.js', '**/*.html', '!**/node_modules/**', '!browser/bundle.js', '!browser/testdata.js', '!docs/**', '!*.md', '!README.html', '!CONTRIBUTING.html'],
        tasks: ['shell'],
      },
    },
    mochaTest: {
      options: {
        reporter: 'spec',
      },
      src: ['test/*.js'],
    },
    markdown: {
      all: {
        files: [{
          expand: true,
          src: '*.md',
          dest: '.',
          ext: '.html'
        }]
      }
    }


  });

  grunt.registerTask('default', ['shell','watch']);

};
