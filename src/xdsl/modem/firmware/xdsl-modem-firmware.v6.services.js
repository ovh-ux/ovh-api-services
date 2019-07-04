angular.module("ovh-api-services").service("OvhApiXdslModemFirmwareV6", function ($resource, OvhApiXdslModemFirmware) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemFirmware.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/firmware", {
        xdslId: "@xdslId"
    }, {
        get: {
            method: "GET",
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { data: data };
                }
                return data;
            }
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        available: {
            method: "GET",
            url: "/xdsl/:xdslId/modem/firmwareAvailable",
            isArray: true,
            cache: OvhApiXdslModemFirmware.cache
        }
    });
});
