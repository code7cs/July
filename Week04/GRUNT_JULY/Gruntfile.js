/*
 * @Author: Hanfan Wang
 * @Date: 2020-08-06 09:58:28
 * @LastEditTime: 2020-08-06 10:23:41
 */
// Register the tasks
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
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
};
