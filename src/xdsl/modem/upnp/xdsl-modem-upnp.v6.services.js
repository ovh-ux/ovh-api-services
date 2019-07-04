angular.module("ovh-api-services").service("OvhApiXdslModemUpnpV6", function ($resource, OvhApiXdslModemUpnp) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemUpnp.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/upnp", {
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
        }
    });
});
