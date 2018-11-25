define('dataService',['jquery'], function ($) {

    "use strict";
    //ops();

    function DataService() {

        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host + getUrl.pathname.split('/')[1] + '/';
        var urlTiles = baseUrl + "Home/GetTiles";
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
