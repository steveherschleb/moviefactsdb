module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: true
      },

      build: ['Gruntfile.js', 'models/*.js', 'controllers/*.js', 'config/*.js', 'spec/*.js', 'migrations/*.js', 'seeds/*.js', 'knexfile.js', 'app.js']
    },


    sass: {
      options: {
        sourceMap: false
      },
      build: {
        files: {
          'public/css/style.css': 'public/css/style.scss'
        }
      }
    },


    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'public/css/style.min.css': 'public/css/style.css'
        }
      }
    },

    
    copy: {
      main: {
        files: [
          { expand: true, src: ['public/css/*.min.css', 'public/js/**', 'public/img/**'], dest: 'build', filter: 'isFile' },
        ],
      },
    },


    clean: ['build/public/css', 'build/public/js', 'build/public/img'],
  });

  
  grunt.registerTask('default', ['jshint', 'sass', 'cssmin', 'clean', 'copy']); 
  
  //plugins 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');

};
