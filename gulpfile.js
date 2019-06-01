'use strict'

const gulp          = require('gulp');
const css          = require('gulp-clean-css');
const sourcemaps    = require('gulp-sourcemaps');
const connect       = require('gulp-connect');
const htmlmin       = require('gulp-htmlmin');
const uglify        = require('gulp-uglify-es').default;

const paths = {
  html: 'src/*.html',
  css: 'src/css/**/*.css',
  script: 'src/js/**/*.js',
  sw: 'src/service-worker.js',
  images: 'src/images/**',
  vendor: 'src/js/vendors/*.js',
  manifest: 'src/manifest.json'
};

const imagemin = require('gulp-imagemin');
 
const imagesGulp = function() {
  return gulp.src(paths.images)
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
    .pipe(gulp.dest('dist/images'));
};

const gulpCss = function() {
  return gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(css())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
};

const jsGulp = function() {
  return gulp.src(paths.script, {
      ignore: [paths.sw, paths.vendor]
    })
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'));
};

const copyManifest = function() {
  return gulp.src(paths.manifest)
      .pipe(gulp.dest('./'))
};

const swGulp = function() {
  return gulp.src(paths.sw)
    .pipe(uglify())
    .pipe(gulp.dest('./'));
};

const vendorGulp = function() {
  return gulp.src(paths.vendor)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/vendors'))
};

const htmlGulp = function() {
  return gulp.src(paths.html)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./'));
};

const watchJS = function() {
  return gulp.watch(paths.script, gulp.series(jsGulp, reload));
};

const watchCSS = function() {
  return gulp.watch(paths.css, gulp.series(gulpCss, reload));
};

const watchHTML = function() {
  return gulp.watch(paths.html, gulp.series(htmlGulp, reload));
};

const server = function() {
  return connect.server({livereload: true});
};

const reload = function() {
  return gulp.src(paths.html).pipe(connect.reload());
};

const watch = gulp.parallel(
  watchCSS, watchJS, watchHTML
);


exports.build = gulp.parallel(imagesGulp, jsGulp, gulpCss, htmlGulp, swGulp, vendorGulp, copyManifest);

exports.watch = gulp.parallel(server, watch);
