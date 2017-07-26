angular.module("ovh-api-services").service("XdslModemWifiLexi", function ($resource, XdslModemWifi) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslModemWifi.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/wifi/:wifiName", {
        xdslId: "@xdslId",
        wifiName: "@wifiName"
    }, {
        get: {
            method: "GET",
            cache: XdslModemWifi.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });
});
