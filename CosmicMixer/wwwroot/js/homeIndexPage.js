require(['jquery', 'Handlebars', 'hbstemplates', 'dataService'], function ($, Handlebars, hbstemplates, dataService) {

    "use strict";

    function renderTile(context) {
        var rendered = Hbs.templates.tile(context);
        $("#container-teils").append(rendered);
    }

    function getTiles(fromId, numTeils) {

        var getTiles = dataService.getTiles(fromId, numTeils);

        setTimeout(function () {
            getTiles.abort();
            $(window)
                .off("scroll.index.getTiles", ajaxScroll)
                .on("scroll.index.getTiles", ajaxScroll);
        }, 5000);

        getTiles
            .then(
                function (tiles) {
                    $.each(tiles, function (i, tile) {
                        console.log(JSON.stringify(tile));
                        renderTile(tile);
                        $(window)
                            .off("scroll.index.getTiles", ajaxScroll)
                            .on("scroll.index.getTiles", ajaxScroll);
                    });
                },
                function (jqXHR, textStatus, err) {
                    console.log(err);
                    console.log(textStatus);
                    alert(JSON.stringify(jqXHR));
                }
            )
            .always(function () {
                // clean up!
            });
    }

    function ajaxScroll(event) {
        let $wnd = $(window);
        let $doc = $(document);
        let $containerTeils = $("#container-teils");

        if ($wnd.scrollTop() >= $doc.height() - $wnd.height() - 10) {
            $(window).off("scroll.getTiles", ajaxScroll);

            var lastId = $containerTeils.find("div.teil:last-child").attr("data-id");
            getTiles(parseInt(lastId) + 1, 9);
        }
    }

    $(document).ready(function () {
        getTiles(1, 9);
        $(window).on("scroll.index.getTiles", ajaxScroll);
    });
});
