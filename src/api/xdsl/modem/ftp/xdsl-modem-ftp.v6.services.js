angular.module("ovh-api-services").service("OvhApiXdslModemFtpV6", function ($resource, OvhApiXdslModemFtp) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemFtp.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/ftp", {
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
