var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify'); 
var concatCss = require('gulp-concat-css');
var watch = require('gulp-watch')
var webpack = require('gulp-webpack');


gulp.task('css-index', function () {
  return gulp.src('src/styles/index/*.css')
    .pipe(concatCss("index.css"))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('public/styles/'))
});

gulp.task('css-media', function () {
  return gulp.src('src/styles/media/*.css')
    .pipe(concatCss("media.css"))
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
    gulp.watch('src/js/**/*', ['webpack'])
    gulp.watch('src/styles/index/*.css', ['css-index'])
    gulp.watch('src/styles/media/*.css', ['css-media'])
    gulp.watch('src/*.html', ['html'])
})
