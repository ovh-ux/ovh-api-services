angular.module("ovh-api-services").service("XdslModemLanLexi", function ($resource, XdslModemLan) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslModemLan.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/lan/:lanName", {
        xdslId: "@xdslId",
        lanName: "@lanName"
    }, {
        get: {
            method: "GET",
            cache: XdslModemLan.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });
});
