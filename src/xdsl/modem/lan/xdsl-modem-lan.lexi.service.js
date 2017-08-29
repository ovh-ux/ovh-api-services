angular.module("ovh-api-services").service("OvhApiXdslModemLanLexi", function ($resource, OvhApiXdslModemLan) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemLan.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/lan/:lanName", {
        xdslId: "@xdslId",
        lanName: "@lanName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiXdslModemLan.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });
});
