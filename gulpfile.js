var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify'); 
var concatCss = require('gulp-concat-css');
var watch = require('gulp-watch')
var webpack = require('gulp-webpack');

var browserSync = require('browser-sync');

gulp.task('css-index', function () {
  return gulp.src('src/styles/index/*.css')
    .pipe(concatCss("index.css"))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('public/styles/'))
});

gulp.task('css-catalog', function () {
  return gulp.src('src/styles/catalog/*.css')
    .pipe(concatCss("catalog.css"))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('public/styles/'))
});

 gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/'))
    
});

gulp.task('webpack', function () {
  return gulp.src('src/js/*')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('public/js/'));
})


gulp.task('watch', function () {
    gulp.watch('src/js/*', ['webpack'])
    gulp.watch('src/styles/index/*.css', ['css-index'])
    gulp.watch('src/styles/catalog/*.css', ['css-catalog'])
    gulp.watch('src/*.html', ['html'])
})
