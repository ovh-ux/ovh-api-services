angular.module("ovh-api-services").service("OvhApiXdslModemIpsecAlgV6", function ($resource, OvhApiXdslModemIpsecAlg) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemIpsecAlg.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/ipsecAlg", {
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
