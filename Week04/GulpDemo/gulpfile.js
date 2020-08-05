/*
 * @Author: Hanfan Wang
 * @Date: 2020-08-05 09:44:28
 * @LastEditTime: 2020-08-05 11:16:18
 */
var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var browserify = require("browserify");

var styleSRC = "./src/scss/style.scss";
var styleDIST = "./dist/css";

var jsSRC = "./src/js/script.js";
var jsDEST = "./dist/js";

var jsFILES = [jsSRC];

gulp.task("style", function (done) {
  gulp
    .src(styleSRC)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "compressed",
      })
    )
    .on("error", console.error.bind(console))
    // .pipe(autoprefixer({ browsers: ["last 2 versions"] }))
    .pipe(autoprefixer())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(styleDIST));
  done();
});

gulp.task("js", function (done) {
  jsFILES
    .map(function (entry) {
      return browserify({
        entries: [entry],
      });
    })
    .transform(babelify, { presets: ["env"] })
    .bundle()
    .pipe(source());
  // gulp.src(jsSRC).pipe(gulp.dest(jsDEST));
  // done();
  // browserify
  // transform babelify[env]
  // bundle
  // source
  // rename .min
  // buffer
  // soucemap
  // uglify
  // write sourcemaps
  //dist
});

styleWatch = "./src/scss/**/*.scss";
jsWatch = "./src/js/**/*.js";

gulp.task("watch", function () {
  gulp.watch(styleWatch, gulp.series("style")),
    gulp.watch(jsWatch, gulp.series("js"));
});

gulp.task("default", gulp.parallel("style", "js"), function () {});
