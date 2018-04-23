﻿(function (services, $, undefined) {

    var dataService = function () {

        var urlBase = "http://localhost:3000/Home";
        var urlTiles = urlBase + "/GetTiles";

        getTiles = function (fromId, numTeils) {
            return $.getJSON(urlTiles, { fromId: 1 });
        };

        return {
            getTiles: getTiles
        };
    }

    services.dataService = dataService();

})(window.services = window.services || {}, jQuery);

