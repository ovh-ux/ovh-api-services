angular.module("ovh-api-services").service("CloudProjectQuotaLexi", function ($resource) {
    "use strict";

    var quota = $resource("/cloud/project/:serviceName/quota", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET"
        },
        query: {
            method: "GET",
            isArray: true
        }
    });

    return quota;

});
