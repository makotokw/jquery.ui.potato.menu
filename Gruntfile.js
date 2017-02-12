'use strict';

module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var _ = require('lodash');

  var now = new Date();
  var pkg = grunt.file.readJSON('package.json');
  pkg = _.assign(
    pkg,
    {
      src: './src',
      dist: './dist',
      demo: './demo'
    }
  );

  var license = grunt.file.read('./license-header.txt');
  license = grunt.template.process(license, {
    data: {
      buildYear: now.getFullYear(),
      version: pkg.version
    }
  });

  //noinspection JSUnusedGlobalSymbols,JSUnresolvedFunction
  grunt.initConfig({
    pkg: _.assign(
      pkg,
      {
        src: './src',
        dist: './dist',
        demo: './demo'
      }
      ),

    clean: {
      dist: {
        src: ['<%= pkg.dist %>']
      }
    },

    concat: {
      options: {
        banner: license
      },
      dist: {
        files: {
          '<%= pkg.dist %>/jquery.ui.potato.menu.css': '<%= pkg.src %>/jquery.ui.potato.menu.css',
          '<%= pkg.dist %>/jquery.ui.potato.menu.js': '<%= pkg.src %>/jquery.ui.potato.menu.js'
        }
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 1
      },
      dist: {
        files: {
          '<%= pkg.dist %>/jquery.ui.potato.menu.min.css': '<%= pkg.dist %>/jquery.ui.potato.menu.css'
        }
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      dist: {
        files: {
          '<%= pkg.dist %>/jquery.ui.potato.menu.min.js': '<%= pkg.dist %>/jquery.ui.potato.menu.js'
        }
      }
    },

    /* jshint ignore:start */
    notify_hooks: {
      options: {
        enabled: true,
        success: false,
        duration: 3
      }
    }
    ,
    /* jshint ignore:end */

    browserSync: {
      demo: {
        bsFiles: {
          src: '<%= pkg.demo %>/*.html'
        }
        ,
        options: {
          server: ['./'],
          startPath: '<%= pkg.demo %>/index.html'
        }
      }
    }
  });

  grunt.registerTask('debug', function (/*target*/) {
    grunt.task.run([
      'browserSync'
    ]);
  });

  grunt.registerTask('build', function (/*target*/) {
    grunt.task.run([
      'clean',
      'concat',
      'uglify',
      'cssmin'
    ]);
  });
};