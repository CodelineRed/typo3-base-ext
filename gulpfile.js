var del         = require('del');
var gulp        = require('gulp');
var prefixer    = require('gulp-autoprefixer');
var minifyCss   = require('gulp-clean-css');
var concat      = require('gulp-concat');
var eslint      = require('gulp-eslint');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var sassLint    = require('gulp-sass-lint');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');

var sourcePath  = 'Resources/Private/';
var publicPath  = 'Resources/Public/';

// processing scss to css and minify result
gulp.task('scss', function() {
    gulp.src(sourcePath + 'Scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(publicPath + 'Css/'));
});

// lint scss files
gulp.task('scss-lint', function () {
    gulp.src([
            sourcePath + 'Scss/**/*.scss',
            '!' + sourcePath + 'Scss/plugin/slick.scss' // exclude because of trailing ".scss" in path
        ])
        .pipe(sassLint(require('./scss-lint.json')))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

// concatinate and uglify all js
gulp.task('js', function() {
    gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
            'node_modules/@fortawesome/fontawesome-free/js/all.js',
            sourcePath + 'Js/lib/**/*.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/cssuseragent/cssua.js',
            'node_modules/vanilla-lazyload/dist/lazyload.js',
            'node_modules/cookieconsent/src/cookieconsent.js',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
            sourcePath + 'Js/plugin/**/*.js',
            sourcePath + 'Js/module/**/*.js',
            sourcePath + 'Js/scripts.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(publicPath + 'Js/'));
});

// lint js files
gulp.task('js-lint', function () {
    gulp.src([
            sourcePath + 'Js/**/*.js'
        ])
        .pipe(eslint(require('./js-lint.json')))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// minify images
gulp.task('img', function() {
    gulp.src(sourcePath + 'Img/**/*.{png,gif,jpg,jpeg,ico,xml,json,svg}')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest(publicPath + 'Img/'));
});

// copy all fonts
gulp.task('font', function() {
    gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/webfonts/**',
            'node_modules/slick-carousel/slick/fonts/**',
            sourcePath + 'Font/**'
        ])
        .pipe(gulp.dest(publicPath + 'Font/'));
});

// copy all svg images
gulp.task('svg', function() {
    gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/svgs/**',
//            'node_modules/@fortawesome/fontawesome-free/sprites/**',
            sourcePath + 'Svg/**/*.svg'
        ])
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest(publicPath + 'Svg/'));
});

// clean up folders
gulp.task('cleanup', function() {
    del([
            publicPath + 'Css/**/*',
            '!' + publicPath + 'Css/rte.css',
            publicPath + 'Js/**/*',
            publicPath + 'Img/**/*',
            publicPath + 'Font/**/*',
            publicPath + 'Svg/**/*'
        ]);
});

// add the watcher
gulp.task('watch', function() {
    // watch scss files
    gulp.watch(sourcePath + 'Scss/**', ['scss', 'scss-lint']);
    // watch js files
    gulp.watch(sourcePath + 'Js/**', ['js', 'js-lint']);
    // watch images
    gulp.watch(sourcePath + 'Img/**', ['img']);
    // watch fonts
    gulp.watch(sourcePath + 'Font/**', ['font']);
    // watch svg
    gulp.watch(sourcePath + 'Svg/**', ['svg']);
});

// production
gulp.task('prod', ['scss', 'scss-lint', 'js', 'js-lint', 'img', 'font', 'svg']);

// default task if just called gulp (incl. Watch)
gulp.task('default', ['scss', 'scss-lint', 'js', 'js-lint', 'img', 'font', 'svg', 'watch']);