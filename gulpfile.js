'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function(){
	return gulp.src('build/css/main.css')
		.pipe(gulp.dest('deploy/css/'))
		.pipe(cssnano())
		.pipe(rename({extname:'.min.css'}))
		.pipe(gulp.dest('deploy/css/'))
});
gulp.task('js', function(){
	return gulp.src('build/js/main.js')
		.pipe(gulp.dest('deploy/js/'))
		.pipe(uglify())
		.pipe(rename({extname:'.min.js'}))
		.pipe(gulp.dest('deploy/js/'))
});
gulp.task('default', ['css','js']);