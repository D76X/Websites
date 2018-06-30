require(['jquery', 'jqueryui'], function ($) {

    "use strict";  

    var initialTop = $("#sidebar").top;

    function animateSidebar(event) {

        let $wnd = $(window);        

        if ($wnd.scrollTop() > 20) {
            $("#sidebar").addClass("stick-top", 1000);
        }
        else {
            $("#sidebar").removeClass("stick-top", 500);
        }             
    }  

    $(document).ready(function () {
        $(window).on("scroll.layout.animateSidebar", animateSidebar);
    });
});
