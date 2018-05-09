﻿'use strict'

module.exports = function (gulp, plugins) {

    return function () {

        gulp.watch([
            "./**/*.html",
            "./**/*.css",
            "./**/*.cshtml",
            "./**/*.hbs"],
            ['templateshbs',
                'browser-sync-reload']);
    }
};