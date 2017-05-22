var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var webserver = require('gulp-webserver');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

var bases = {
    app: 'app/',
    dist: 'webapp/'
};

var paths = {
    //Incluiremos todos los componentes dentro de app, exceptuando la carpeta lib (administrada por bower)
    scripts: ['js/**/*.js'],
    //Direccion de las librerias, estas las copiaremos integramente
    libs: [
        'vendor/modernizr.custom.28468.js',
        'vendor/modernizr.custom.63321.js',
        'vendor/jquery-1.11.3.min.js',
        'vendor/jquery.cslider.js',
        'vendor/jquery.catslider.js',
        'vendor/JSLINQ.js',
        'vendor/angular.min.js',
        'vendor/angular-route.min.js',
        'vendor/ngDialog.min.js',
        'vendor/angular-resource.min.js',
        'vendor/js/checks.js',
        'vendor/js/filtros.js',
        'vendor/js/directive.js',
        'vendor/js/app.js',
        'vendor/js/service.js',
        'vendor/js/catalogos.js',
        'vendor/js/contactanos.js'
    ],
    //Ubicacion de los archivos de estilos que minificaremos
    styles: [
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
        'css/ngDialog-theme-plain.css'],
    //los archivos html que incluiremos en la minificacion
    html: ['view/*.html'],
    //La ruta de las imagenes que minificaremos
    images: ['res/img/**/*.*'],
    //Otros extras
    extras: []
};

gulp.task('clean', function() {
    return gulp.src(bases.dist)
        .pipe(clean());
});

gulp.task('images', function() {
    return   gulp.src('images/**/*.{png,jpg,jpeg,gif,svg}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('webapp/images'));
});

gulp.task('copy:estilo', function() {
    return gulp.src(paths.styles)
        .pipe(minifyCSS())
        .pipe(concat('estilos.min.css'))
        .pipe(gulp.dest('webapp/css/'));
});

gulp.task('copy:fonts', function() {
    return gulp.src('fonts/*')
        .pipe(gulp.dest('webapp/fonts'));
});

gulp.task('copy:vendor', function() {
    return gulp.src(paths.libs)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('webapp/vendor'));
});

gulp.task('copy:index', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('webapp/'));
});

gulp.task('copy:html', function() {
    return gulp.src(paths.html)
        .pipe(gulp.dest('webapp/view/'));

});
gulp.task('copy:js', function() {
    return gulp.src(paths.scripts)
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('webapp/js/'));

});

gulp.task('web_server', function() {
    gulp.src('webapp')
        .pipe(webserver({
            host: 'localhost',
            port: 6641,
            livereload: true,
            open: true,
            fallback: 'index.html',
        }));
});


gulp.task('watch', function() {
    gulp.watch('css/*.css', ['copy:estilo']);
    gulp.watch('js/*.js', ['copy:js']);
    gulp.watch('view/*.html', ['copy:html']);
    gulp.watch('*.html',['copy:index']);
});

gulp.task('build', ['clean'], function () {
    runSequence(['images','copy:estilo','copy:fonts','copy:vendor','copy:index','copy:html','copy:js']);
});

gulp.task('default', ['build','web_server','watch']);

/*
 gulp.task('default', ['images','copy:estilo','copy:fonts','copy:vendor','copy:index','copy:html','copy:js','watch'],function(){
 runSequence(['web']);
 });
 */