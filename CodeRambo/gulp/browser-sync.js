'use strict';

module.exports = function (gulp, plugins) {

    return function () {

        plugins.browserSync.init({
            proxy: "localhost:53436",
            ui: {
                port: 53437
            }
        });
    };
};