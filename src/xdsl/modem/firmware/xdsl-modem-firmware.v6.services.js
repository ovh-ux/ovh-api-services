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
            reponseType: "text"
        },
        post: {
            method: "POST",
            interceptor: interceptor
        }
    });
});
