angular.module("ovh-api-services").service("XdslModemDevicesAapi", function ($resource, XdslModemDevices) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslModemDevices.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/connectedDevices", {
        xdslId: "@xdslId"
    }, {
        query: {
            method: "GET",
            url: "/xdsl/:xdslId/modem/connectedDevices",
            isArray: true,
            serviceType: "aapi",
            cache: XdslModemDevices.cache
        },
        refresh: {
            method: "POST",
            url: "/xdsl/:xdslId/modem/connectedDevices/refresh",
            serviceType: "aapi",
            interceptor: interceptor
        }
    });
});
