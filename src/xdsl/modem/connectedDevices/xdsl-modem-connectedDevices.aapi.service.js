angular.module("ovh-api-services").service("OvhApiXdslModemDevicesAapi", function ($resource, OvhApiXdslModemDevices) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemDevices.resetCache();
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
            cache: OvhApiXdslModemDevices.cache
        },
        refresh: {
            method: "POST",
            url: "/xdsl/:xdslId/modem/connectedDevices/refresh",
            serviceType: "aapi",
            interceptor: interceptor
        }
    });
});
