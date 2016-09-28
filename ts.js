'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescript = require('gulp-tsc');

let tplName = process.argv[2];
let tplPath = './'+ tplName +'/';

gulp.task('default', function () {
	return gulp.src(tplPath + 'js/main.ts')
		.pipe(typescript({
			out: 'main.js',
			module: 'amd',
			target: 'ES5'
		}))
		.pipe(gulp.dest(tplPath + 'src/js'));
});

gulp.task('default:watch', function () {
	gulp.watch(tplPath + 'js/*.ts', ['default']);
});

gulp.start('default');
//gulp.start('default:watch');
