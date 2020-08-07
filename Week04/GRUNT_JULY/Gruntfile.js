/*
 * @Author: Hanfan Wang
 * @Date: 2020-08-06 09:58:28
 * @LastEditTime: 2020-08-06 10:49:44
 */

var sass = require("node-sass");

module.exports = function (grunt) {
  grunt.initConfig({
    // configure our tasks
    concat: {
      js: {
        src: ["js/*.js"],
        dest: "build/scripts.js",
      },
      css: {
        src: ["css/*.css"],
        dest: "build/styles.css",
      },
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      build: {
        files: [
          {
            src: "css/sass/styles.scss",
            dest: "css/styles.css",
          },
        ],
      },
    },
    uglify: {
      build: {
        files: [
          {
            src: "build/scripts.js",
            dest: "build/scripts.min.js",
          },
        ],
      },
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "build",
            src: ["*.css", "!*m.min.css"],
            dest: "build",
            ext: ".min.css",
          },
        ],
      },
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
        },
      },
      files: ["js/*.js"],
      options: {
        globals: {
          jQuery: true,
        },
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.loadNpmTasks("grunt-contrib-jshint");

  // Register the tasks
  grunt.registerTask("concat-js", ["concat:js"]);
  grunt.registerTask("concat-css", ["concat:css"]);

  grunt.registerTask("all", ["concat-js", "concat-css"]);
};
