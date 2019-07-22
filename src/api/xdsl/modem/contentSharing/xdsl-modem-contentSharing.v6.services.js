angular.module("ovh-api-services").service("OvhApiXdslModemContentSharingV6", function ($resource, OvhApiXdslModemContentSharing) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemContentSharing.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/contentSharing", {
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
