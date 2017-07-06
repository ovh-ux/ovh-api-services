angular.module("ovh-api-services").service("CdnDedicatedLexi", function ($resource, $q, CdnDedicated) {
    "use strict";

    return $resource("/cdn/dedicated/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: CdnDedicated.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: CdnDedicated.cache
        }
    });
});
