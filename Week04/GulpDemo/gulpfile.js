/*
 * @Author: Hanfan Wang
 * @Date: 2020-08-05 09:44:28
 * @LastEditTime: 2020-08-05 10:21:04
 */
var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

var styleSRC = "./src/scss/style.scss";
var styleDIST = "./dist/css";

gulp.task("style", function (done) {
  gulp
    .src(styleSRC)
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "compressed",
      })
    )
    .on("error", console.error.bind(console))
    .pipe(autoprefixer({ browsers: ["last 2 versions"] }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(styleDIST));
  done();
});
