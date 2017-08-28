angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpLexi", function ($resource, $cacheFactory, OvhApiXdslModemLanDhcpAapi) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemLanDhcpLexi");
    var interceptor = {
        response: function (response) {
            OvhApiXdslModemLanDhcpAapi.resetCache();
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
