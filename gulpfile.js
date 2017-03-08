var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var webserver = require('gulp-webserver');


 gulp.task('minifyCss', function() {
  console.log('minifying css ...');
  return gulp.src([
          'css/reset.css',
          'css/fonts.css',
          'css/flexboxgrid.css',
          'css/estilo.css',
          'css/slider.css',
          'css/animations.css',
          'css/banner.css',
          'css/rejillas.css',
          'css/ngDialog.css',
          'css/ngDialog-theme-default.css',
          'css/ngDialog-theme-plain.css'
      ])
    .pipe(concat('estilos.min.css'))
    .pipe(gulp.dest('webapp/css/'));
});

gulp.task('copyFonts', function() {
  console.log('minifying css ...');
  return gulp.src('fonts/*')
    .pipe(gulp.dest('webapp/fonts'));
});

gulp.task('copyImages', function() {
  gulp.src('images/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('webapp/images'));
});


gulp.task('angularjs', function() {
  console.log('minifying js ...');
  return gulp.src('vendor/angularjs/*.js')
    .pipe(concat('angularjs.min.js'))
    .pipe(gulp.dest('webapp/js/'));
});

gulp.task('jquery', function() {
  console.log('minifying js ...');
  return gulp.src('vendor/jquery/*.js')
    .pipe(concat('jquery.min.js'))
    .pipe(gulp.dest('webapp/js/'));
});

gulp.task('appJs', function() {
  console.log('minifying js ...');
  return gulp.src('js/*.js')
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('webapp/js/'));
}); 

gulp.task('copyView', function() {
  console.log('copyView htmls ...');
  return gulp.src('view/*.html')
    .pipe(gulp.dest('webapp/view/'));
});
 
gulp.task('copyIndex', function() {
  console.log('copyIndex htmls ...');
  return gulp.src('index.html')
    .pipe(gulp.dest('webapp/'));
});

gulp.task('web_server', function() {
  gulp.src('webapp')
    .pipe(webserver({
      path:'/',
      port:8010,
      fallback: 'index.html'
    }));
});


gulp.task('watch', function() {

  gulp.watch('css/*.css', ['minifyCss']);

  gulp.watch('js/*.js', ['appJs']);
});

gulp.task('default', ['web_server','minifyCss','copyFonts','copyImages','jquery', 'angularjs', 'appJs','copyView','copyIndex','watch']);











