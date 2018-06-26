require(['jquery'], function ($) {

    "use strict";  

    var initialTop = $("#sidebar").top;

    function animateSidebar(event) {

        let $wnd = $(window);        

        if ($wnd.scrollTop() > 20) {
            console.log('>120');
            //$("#sidebar").animate({ top: '0' }, 100);
            //$("#sidebar").toggleClass()
            $("#sidebar").addClass("stick-top");
        }
        else {
            //$("#sidebar").css({ 'top': '' });
            $("#sidebar").removeClass("stick-top");
        }             
    }  

    $(document).ready(function () {

        console.log("document loaded"); 
        $(window).on("scroll.layout.animateSidebar", animateSidebar);
    });
});
