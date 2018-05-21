define(['jquery'], function ($) {

    "use strict";

    function DataService() {

        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host + getUrl.pathname.split('/')[1] + '/';
        var urlTiles = baseUrl + "Home/GetTiles";

        console.log(urlTiles);

        this.getTiles = function (fromId, numTeils) {
            return $.getJSON(
                urlTiles, {
                    fromId: fromId,
                    numTeils: numTeils,
                });
        };        
    }

    return new DataService();
});

