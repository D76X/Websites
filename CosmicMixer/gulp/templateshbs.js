'use strict'

var path = require('path');

module.exports = function (gulp, plugins) {

    return function () {

        // https://www.npmjs.com/package/gulp-handlebars

        // stream of precompiled partials.
        // by convention in HandlebarsJs partials are named with a _ prefix.
        var partials = gulp.src('./templateshbs/_*.hbs')
            // precompile
            .pipe(plugins.handlebars())
            // register the precompiled partials with Handlebars
            .pipe(plugins.wrap('Hanldebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));'), {}, {
                imports: {
                    processPartialName: function (fileName) {
                        return JSON.stringify(path.basename(fileName, '.js').substr(1));
                    }
                }
            });

        // stream of precompiled handlebars templates.
        // the partials must have already been precompiled.
        // [^-] = all files that are not prefixed by _
        var templates = gulp.src('./templateshbs/[^_]*.hbs')
            .pipe(plugins.handlebars())
            .pipe(plugins.wrap('Handlebars.template(<%= contents %>)'))
            // declare a namespace for the precompiled templates
            .pipe(plugins.declare({
                namespace: 'Hbs.templates',
                noRedeclare: true,
            }));

        // merge the streams
        // https://blog.mariusschulz.com/2015/05/02/merging-two-gulp-streams
        return plugins.mergeStream(partials, templates)
            .pipe(plugins.concat('templates.js'))            
            .pipe(gulp.dest('./wwwroot/js/'))
    }
};