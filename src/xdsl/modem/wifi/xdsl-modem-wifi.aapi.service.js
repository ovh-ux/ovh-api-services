angular.module("ovh-api-services").service("XdslModemWifiAapi", function ($resource, XdslModemWifi) {
    "use strict";

    var xdslModemWifiAapi = $resource("/xdsl/:xdslId/modem/wifi/details", {
        xdslId: "@xdslId"
    }, {
        getWifiDetails: {
            method: "GET",
            url: "/xdsl/:xdslId/modem/wifi/details",
            isArray: true,
            serviceType: "aapi",
            cache: XdslModemWifi.cache
        }
    });

    return xdslModemWifiAapi;
});
