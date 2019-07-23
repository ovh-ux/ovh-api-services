angular.module("ovh-api-services").service("OvhApiDomainOptionsV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDomainOptionsV6Query");
    var cache = $cacheFactory("OvhApiDomainOptionsV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var domainOptions = $resource("/domain/:serviceName/option/:option", {
        serviceName: "@serviceName",
        option: "@option"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: { method: "GET", cache: cache },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    domainOptions.resetQueryCache = function () {
        queryCache.removeAll();
    };

    domainOptions.resetCache = function () {
        cache.removeAll();
    };

    return domainOptions;
});
