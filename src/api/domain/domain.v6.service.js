angular.module("ovh-api-services").service("OvhApiDomainV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDomainV6");
    var queryCache = $cacheFactory("OvhApiDomainV6Query");

    var domain = $resource("/domain/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: cache
        }
    });

    domain.resetCache = function () {
        cache.removeAll();
    };

    domain.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return domain;
});
