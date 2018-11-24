'use strict';

var gutil = require('gulp-util');

module.exports = function (gulp, plugins) {

    return function () {

        //var minifiedlibs = gulp.src([
        //    './wwwroot/libs/require-2.3.5-min.js',
        //    './wwwroot/libs/handlebars.runtime.min.js',
        //    './wwwroot/libs/jquery.min.js',
        //])
        //    .pipe(plugins.concat('libs.min.js'))

        // do not re-uglify the output file itsef!
        var minifiedjs = gulp.src([
            './wwwroot/libs/require-2.3.5-min.js',
            './wwwroot/libs/handlebars.runtime.min.js',
            './wwwroot/libs/jquery.min.js',
            './wwwroot/js/templates.js',
            './wwwroot/js/config.js',
            './wwwroot/js/dataService.js',
            './wwwroot/js/homeIndexPage.js'
        ])
            .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
            //.pipe(plugins.concat('js.min.js'));       
            .pipe(plugins.concat('site.optimized.min.js'))
            .pipe(gulp.dest('./wwwroot/js/'));
        //return plugins.mergeStream(minifiedlibs, minifiedjs)
        //    .pipe(plugins.concat('site.optimized.min.js')) 
        //    .pipe(gulp.dest('./wwwroot/js/'));
    };
};