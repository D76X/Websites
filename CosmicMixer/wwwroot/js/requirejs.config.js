require.config({
    baseUrl: './', // the wwwroot
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. 
        jquery: 'libs/jquery.min',
        Handlebars: 'libs/handlebars.runtime.min',
        hbstemplates: 'js/templates',
        dataService: 'js/dataService',
        homeIndexPage: 'js/homeIndexPage',
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        },
        hbstemplates: {
            exports: 'Hbs',
            deps: ['Handlebars']
        }
    }
});
