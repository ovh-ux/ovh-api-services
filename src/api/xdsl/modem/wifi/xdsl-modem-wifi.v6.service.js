angular.module("ovh-api-services").service("OvhApiXdslModemWifiV6", function ($resource, OvhApiXdslModemWifi) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemWifi.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/wifi/:wifiName", {
        xdslId: "@xdslId",
        wifiName: "@wifiName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiXdslModemWifi.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });
});
