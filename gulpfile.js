var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');

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
        'vendor/checks.js'
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

gulp.task('clean', function () {
    return gulp.src(bases.dist)
        .pipe(clean());
});

gulp.task('images', function () {
    return gulp.src('images/**/*.{png,jpg,jpeg,gif,svg}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('webapp/images'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('copy:estilo', function () {
    return gulp.src(paths.styles)
        .pipe(minifyCSS())
        .pipe(concat('estilos.min.css'))
        .pipe(gulp.dest('webapp/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('copy:fonts', function () {
    return gulp.src('fonts/*')
        .pipe(gulp.dest('webapp/fonts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('copy:vendor', function () {
    return gulp.src(paths.libs)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('webapp/vendor'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('copy:index', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('webapp/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('copy:html', function () {
    return gulp.src(paths.html)
        .pipe(gulp.dest('webapp/view/'))
        .pipe(browserSync.reload({
            stream: true
        }));

});

gulp.task('copy:js', function () {
    return gulp.src(paths.scripts)
        .pipe(concat(('app.min.js')))
        .pipe(gulp.dest('webapp/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('cat:js', function () {
    return gulp.src('cat/catalogos.js')
        .pipe(concat(('product.min.js')))
        .pipe(uglify())
        .pipe(gulp.dest('webapp/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'webapp'
        }
    })
});

gulp.task('default', ['browserSync', 'images', 'copy:estilo', 'copy:fonts', 'copy:vendor', 'copy:index', 'copy:html', 'copy:js', 'cat:js'], function () {
    gulp.watch('css/*.css', ['copy:estilo']);
    gulp.watch('js/*.js', ['copy:js']);
    gulp.watch('view/*.html', ['copy:html']);
    gulp.watch('*.html', ['copy:index']);

});
