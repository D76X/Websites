'use strict';

module.exports = function (gulp, plugins) {

    return function () {
        try {

            gulp.src('./CompiledLibs/jqueryui-1.9.2-min.js')
                .pipe(plugins.rename('jqueryui-1.9.2-min.js'))
                .pipe(gulp.dest('./wwwroot/libs'));
        }
        catch (e) {
            return -1;
        }
        return 0;
    };
};