module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: true
      },

      build: ['Gruntfile.js', 'models/*.js', 'controllers/*.js', 'config/*.js', 'migrations/*.js', 'seeds/*.js', 'knexfile.js', 'app.js']
    },


    sass: {
      options: {
        sourceMap: false
      },
      build: {
        files: {
          'build/public/css/style.css': 'public/css/style.scss'
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'build/public/css/style.min.css': 'build/public/css/style.css'
        }
      }
    }

  });

  //plugins 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

};
