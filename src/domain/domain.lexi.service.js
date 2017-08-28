angular.module("ovh-api-services").service("OvhApiDomainLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDomainLexi");
    var queryCache = $cacheFactory("OvhApiDomainLexiQuery");

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
