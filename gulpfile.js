'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('scss', function() {
	return gulp.src('./css/dataTables.dateTime.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('js', function() {
	// Just a straight copy for now - nothing fancy. TS / Babel in future
	return gulp.src('./js/dataTables.dateTime.js')
		.pipe(gulp.dest('./dist/'));
});

gulp.task('default', gulp.parallel(
	'js',
    'scss',
));
