angular.module("ovh-api-services").service("OvhApiXdslModemBlocIpV6", function ($resource, OvhApiXdslModemBlocIp) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemBlocIp.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/blocIp", {
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
