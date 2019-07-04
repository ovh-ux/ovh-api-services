angular.module("ovh-api-services").service("OvhApiXdslModemCallWaitingV6", function ($resource, OvhApiXdslModemCallWaiting) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemCallWaiting.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/callWaiting", {
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
