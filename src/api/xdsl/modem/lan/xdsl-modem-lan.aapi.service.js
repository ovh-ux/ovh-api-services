angular.module("ovh-api-services").service("OvhApiXdslModemLanAapi", function ($resource, OvhApiXdslModemLan) {
    "use strict";

    var xdslModemLanAapi = $resource("/xdsl/:xdslId/modem/lan/details", {
        xdslId: "@xdslId"
    }, {
        getLanDetails: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiXdslModemLan.cache
        }
    });

    return xdslModemLanAapi;
});
