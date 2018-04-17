var gulp = require('gulp');
var cache = require('gulp-cache');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browser-sync'])

gulp.task('browser-sync', function () {

    browserSync.init({
        proxy: "localhost:53436",
        ui: {
            port: 53437
        },
    });


    // watch on every file in evry folder - it works but it is heavy handed
    // gulp.watch(["./**/*.*"]).on('change', browserSync.reload);

    gulp.watch(["./**/*.html", "./**/*.css", "./**/*.cshtml"])
        .on('change', browserSync.reload);
});

// non default tasks
gulp.task('copy-node_modules-jquery', function () {
    try {

        gulp.src('./node_modules/jquery/dist/jquery.min.js')
            .pipe(gulp.dest('./wwwroot/lib/jquery'));        
    }
    catch (e) {
        return -1;
    }
    return 0;
});

gulp.task('copy-node_modules-handlebars', function () {
    try {

        gulp.src('./node_modules/handlebars/dist/handlebars.min.js')
            .pipe(gulp.dest('./wwwroot/lib/handlebars'));
    }
    catch (e) {
        return -1;
    }
    return 0;
});