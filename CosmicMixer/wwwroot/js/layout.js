require(['jquery', 'jqueryui'], function ($) {

    "use strict";  

    function animateSidebar(event) {

        let $wnd = $(window);        
        let $sidebar = $("#sidebar");

        if ($wnd.scrollTop() > 20) {
            $sidebar.addClass("stick-top", 1000);
        }
        else {
            $sidebar.removeClass("stick-top", 500);
        }             
    } 

    function setActiveIcon(event) {
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
    }

    $(document).ready(function () {
        $(window).on("scroll.layout.animateSidebar", animateSidebar);
        $("#main-nav").on("click.layout.setActiveIcon", "a", setActiveIcon);
    });
});
