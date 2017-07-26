angular.module("ovh-api-services").service("XdslModemPortLexi", function ($resource, XdslModemPort) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslModemPort.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/portMappings/:name", {
        xdslId: "@xdslId",
        name: "@name"
    }, {
        get: {
            method: "GET",
            cache: XdslModemPort.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: XdslModemPort.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        post: {
            method: "POST",
            url: "/xdsl/:xdslId/modem/portMappings",
            interceptor: interceptor
        }
    });
});
