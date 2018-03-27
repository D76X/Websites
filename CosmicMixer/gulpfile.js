var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task( 'default', [ 'browser-sync' ] )

gulp.task('browser-sync', function() {

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
})