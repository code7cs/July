/*
 * @Author: Hanfan Wang
 * @Date: 2020-08-06 09:58:28
 * @LastEditTime: 2020-08-06 10:44:38
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
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Register the tasks
  grunt.registerTask("concat-js", ["concat:js"]);
  grunt.registerTask("concat-css", ["concat:css"]);

  grunt.registerTask("all", ["concat-js", "concat-css"]);
};
