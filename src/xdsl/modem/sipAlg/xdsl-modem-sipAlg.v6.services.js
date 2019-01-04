angular.module("ovh-api-services").service("OvhApiXdslModemSipAlgV6", function ($resource, OvhApiXdslModemSipAlg) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemSipAlg.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/sipAlg", {
        xdslId: "@xdslId"
    }, {
        get: {
            method: "GET",
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { data: angular.fromJson(data) };
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
