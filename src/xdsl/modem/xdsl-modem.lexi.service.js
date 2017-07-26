angular.module("ovh-api-services").service("XdslModemLexi", function ($resource, XdslModem) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslModem.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem", {
        xdslId: "@xdslId"
    }, {
        get: {
            method: "GET",
            cache: XdslModem.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });

}
);
