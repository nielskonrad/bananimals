// 'use strict';
// https://github.com/bradtraversy/gulpexapp/blob/master/gulpfile.js

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require( 'gulp-rename' );

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

var styleSource = 'src/sass/*.scss';
var styleDist = 'dist/css';

// Logs Message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});

// Copy All HTML files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
});

// Copy All SVG files
gulp.task('copySVG', function(){
  gulp.src('src/assets/svg/*.svg')
      .pipe(gulp.dest('dist/assets/svg'));
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/assets/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/assets/img'))
);

// Minify JS
gulp.task('minify', function(){
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass', function(){
  gulp.src( styleSource )
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest( styleDist ));
});

// Scripts
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['message', 'copyHtml', 'copySVG', 'imageMin', 'sass', 'scripts']);

gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
});

// var gulp = require( 'gulp' );
// var rename = require( 'gulp-rename' );
// var sass = require( 'gulp-sass' );

// var styleSource = './src/scss/style.scss';
// var styleDist = './dist/css/';

// gulp.task('style', function() {
//   gulp.src( styleSource )
//     .pipe( sass({
//       errorLogToConsole: true,
//       outputStyle: 'compressed'
//     }) )
//     .on( 'error', console.error.bind( console ) )
//     .pipe( rename( { suffix: '.min' } ) )
//     .pipe( gulp.dest( styleDist ) );
// })
 
// var gulp = require('gulp');
// var sass = require('gulp-sass');
 
// gulp.task('sass', function () {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
 
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });
