angular.module("ovh-api-services").service("XdslModemLanAapi", function ($resource, XdslModemLan) {
    "use strict";

    var xdslModemLanAapi = $resource("/xdsl/:xdslId/modem/lan/details", {
        xdslId: "@xdslId"
    }, {
        getLanDetails: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: XdslModemLan.cache
        }
    });

    return xdslModemLanAapi;
});
