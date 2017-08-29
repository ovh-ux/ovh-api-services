angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemLanDhcpAapi");

    var xdslModemLanDhcpAapi = $resource("/xdsl/:xdslId/modem/lan/dhcp", {
        xdslId: "@xdslId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: cache
        }
    });

    xdslModemLanDhcpAapi.resetCache = function () {
        cache.removeAll();
    };

    return xdslModemLanDhcpAapi;
});
