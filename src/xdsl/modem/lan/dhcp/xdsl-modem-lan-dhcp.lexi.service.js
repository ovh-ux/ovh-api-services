angular.module("ovh-api-services").service("XdslModemLanDhcpLexi", function ($resource, $cacheFactory, XdslModemLanDhcpAapi) {
    "use strict";

    var cache = $cacheFactory("XdslModemLanDhcpLexi");
    var interceptor = {
        response: function (response) {
            XdslModemLanDhcpAapi.resetCache();
            cache.removeAll();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/lan/:lanName/dhcp/:dhcpName", {
        xdslId: "@xdslId",
        lanName: "@lanName",
        dhcpName: "@dhcpName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: cache,
            isArray: true
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });
});
