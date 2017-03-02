var gulp = require('gulp');
var connect = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

 gulp.task('minifyCss', function() {
  console.log('minifying css ...');
  return gulp.src('css/*.css')
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


gulp.task('minifyJs', function() {
  console.log('minifying js ...');
  return gulp.src(['js/jquery.1.11.3.js','js/jquery.catslider.js'])
    .pipe(concat('sediap.min.js'))
    .pipe(gulp.dest('webapp/js/'));
});

gulp.task('vendor', function() {
  console.log('minifying js ...');
  return gulp.src('vendor/*.js')
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('webapp/vendor/'));
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

// gulp.task('webserver', function() {
//   connect.server({
//     root: './webapp',
//     hostname: '0.0.0.0',
//     port: 9060,
//     livereload: true,
//     middleware: function(connect, opt) {
//       return [ historyApiFallback ];
//     }
//   });
// });




gulp.task('default', ['minifyCss','copyFonts','copyImages', 'minifyJs', 'vendor', 'copyView','copyIndex']);