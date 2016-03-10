var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');


var cssLocation = ['src/styles/css/*.css', '!src/css/*.min.css'];
var scssLocation = 'src/styles/scss/**/*.scss';

gulp.task('styles', function() {
	gulp.src(scssLocation)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('src/styles/css/'));
});

gulp.task('minifyCss', function() {
	gulp.src(cssLocation)
	.pipe(autoprefixer({
	browsers: ['last 2 versions'],
	}))
	.pipe(cssnano())
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('src/styles/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch(scssLocation,['styles']);
    gulp.watch(cssLocation, ['minifyCss']);
});