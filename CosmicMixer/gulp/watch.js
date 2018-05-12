'use strict'

module.exports = function (gulp, plugins) {

    return function () {        

        gulp.watch([
            "./wwwroot/css/*.css",
            "./wwwroot/js/*.js",         
            "./Controllers/*.cs",
            "./Views/**/*.cshtml",
            "./templateshbs/*.hbs"],
            ['templateshbs',
             'browser-sync-reload']);
    }
};