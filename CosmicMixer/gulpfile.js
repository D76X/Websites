var gulp = require('gulp');

//https://github.com/jackfranklin/gulp-load-plugins
//https://stackoverflow.com/questions/33388559/how-to-use-gulp-load-plugins-with-browser-sync
var plugins = require('gulp-load-plugins')({
    pattern: '*'
});

// https://andy-carter.com/blog/automatically-load-gulp-plugins-with-gulp-load-plugins
// https://medium.com/@dave_lunny/task-dependencies-in-gulp-b885c1ab48f0
gulp.task('copy-node_modules-jquery', require('./gulp/copy-node_modules-jquery')(gulp, plugins));
gulp.task('copy-node_modules-handlebars', require('./gulp/copy-node_modules-handlebars')(gulp, plugins));

gulp.task('browser-sync', require('./gulp/browser-sync')(gulp, plugins));
gulp.task('watch', ['browser-sync'], require('./gulp/watch')(gulp, plugins));
gulp.task('default', ['browser-sync', 'watch'])
