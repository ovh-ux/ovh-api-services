angular.module("ovh-api-services").service("OvhApiCdnDedicatedV6", function ($resource, $q, OvhApiCdnDedicated) {
    "use strict";

    return $resource("/cdn/dedicated/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiCdnDedicated.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiCdnDedicated.cache
        },
        quota: {
            method: "GET",
            url: "/cdn/dedicated/:serviceName/quota",
            isArray: true
        },
        swsGetStatistics: {
            method: "GET",
            url: "/sws/dedicated/cdn/:serviceName/statistics",
            serviceType: "aapi",
            isArray: false
        },
        swsGetAllBackends: {
            method: "GET",
            url: "/sws/dedicated/cdn/:serviceName/backends",
            serviceType: "aapi",
            isArray: false
        }
    });
});
