require(['jquery', 'jqueryui'], function ($) {

    "use strict";  

    var initialTop = $("#sidebar").top;

    function animateSidebar(event) {

        let $wnd = $(window);        

        if ($wnd.scrollTop() > 20) {
            console.log('>120');
            $("#sidebar").addClass("stick-top", 1000);
        }
        else {
            $("#sidebar").removeClass("stick-top", 500);
        }             
    }  

    $(document).ready(function () {

        console.log("document loaded"); 
        $(window).on("scroll.layout.animateSidebar", animateSidebar);
    });
});
