/* global require */
'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rimraf = require('gulp-rimraf');
var rename = require('gulp-rename');

gulp.task('copy', function() {
    return gulp.src('src/*.js')
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function() {
    return gulp.src('dist/*.js', {
            read: false
        })
        .pipe(rimraf({
            force: true
        }));
});

gulp.task('compress', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean', 'copy', 'compress']);