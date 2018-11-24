var gulp = require('gulp');

//https://github.com/jackfranklin/gulp-load-plugins
//https://stackoverflow.com/questions/33388559/how-to-use-gulp-load-plugins-with-browser-sync
var plugins = require('gulp-load-plugins')({
    pattern: '*'
});

// https://andy-carter.com/blog/automatically-load-gulp-plugins-with-gulp-load-plugins
// https://medium.com/@dave_lunny/task-dependencies-in-gulp-b885c1ab48f0
gulp.task('copy-node_modules-requirejs', require('./gulp/copy-node_modules-requirejs')(gulp, plugins));
gulp.task('copy-node_modules-jquery', require('./gulp/copy-node_modules-jquery')(gulp, plugins));
gulp.task('copy-node_modules-handlebars-runtime', require('./gulp/copy-node_modules-handlebars-runtime')(gulp, plugins));

gulp.task('copy-CompiledLibs-jquery-ui', require('./gulp/copy-CompiledLibs-jquery-ui')(gulp, plugins));

// bundling and minification
gulp.task('minify-js', require('./gulp/minify-js')(gulp, plugins));

gulp.task('browser-sync', ['templateshbs'], require('./gulp/browser-sync')(gulp, plugins));
gulp.task('browser-sync-reload', require('./gulp/browser-sync-reload')(gulp, plugins));
gulp.task('watch', ['browser-sync'], require('./gulp/watch')(gulp, plugins));
gulp.task('templateshbs', require('./gulp/templateshbs')(gulp, plugins));
gulp.task('default', ['templateshbs', 'browser-sync', 'watch']);
