/*
 * @Author: Hanfan Wang
 * @Date: 2020-08-06 09:23:10
 * @LastEditTime: 2020-08-06 09:26:08
 */
var gulp = require("gulp");
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");

gulp.task("default", function (done) {
  gulp
    .src("src/**/*.css")
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist"));
  done();
});
