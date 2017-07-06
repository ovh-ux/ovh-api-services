angular.module("ovh-api-services").service("DomainLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DomainLexi");
    var queryCache = $cacheFactory("DomainLexiQuery");

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
