'use strict';

var gutil = require('gulp-util');

module.exports = function (gulp, plugins) {

    return function () {

        //var x = gulp.src([
        //    '!./wwwroot/js/site.optimized.min.js',
        //    './wwwroot/js/**/*.js'
        //])
        //    .pipe(plugins.sourcemaps.init())
        //    .pipe(plugins.sourcemaps.write('.'))
        //    //.pipe(gulp.dest('./wwwroot/js/'));

        //var y = gulp.src([
        //    './wwwroot/libs/**/*.js',
        //])
        //    .pipe(plugins.sourcemaps.init())
        //    .pipe(plugins.sourcemaps.write('.'))
        //    //.pipe(gulp.dest('./wwwroot/js/'));

        // https://github.com/gulp-sourcemaps/gulp-sourcemaps

        // do not re-uglify the output file itsef!
        var minifiedjs = gulp.src([
            '!./wwwroot/js/site.optimized.min.js',
            './wwwroot/js/**/*.js'
        ])
            //.pipe(plugins.sourcemaps.init())            
            .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
            // babel-uglify minify all files separately
            // babel-uglify is es6 ready 
            // uglify is not es6 ready it only works up to es5
            //.pipe(plugins.babelMinify())
            //.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
            // pull them together into one stream
            //.pipe(plugins.sourcemaps.write('.'))
            .pipe(plugins.concat('js.min.js'));

        var minifiedlibs = gulp.src([
            './wwwroot/libs/**/*.js',
        ])
            // libs are already minified just pull them together 
            // into a single stream
            //.pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat('libs.min.js'))
        //.pipe(plugins.sourcemaps.write("."));

        return plugins.mergeStream(minifiedlibs, minifiedjs)
            //.pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat('site.optimized.min.js'))
            //.pipe(plugins.sourcemaps.write("."))
            .pipe(gulp.dest('./wwwroot/js/'));
    };
};