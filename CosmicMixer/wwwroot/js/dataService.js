define(['jquery'], function ($) {

    function DataService() {

        var urlBase = "http://localhost:3000/Home";
        var urlTiles = urlBase + "/GetTiles";

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

