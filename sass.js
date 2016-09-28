'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

let tplName = process.argv[2];

let tplPath = './'+ tplName +'/';

gulp.task('sass', function () {
	return gulp.src(tplPath + 'css/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(tplPath + 'src/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch(tplPath + 'css/main.scss', ['sass']);
});

//gulp.start('sass');
gulp.start('sass:watch');