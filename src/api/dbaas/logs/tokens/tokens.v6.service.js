angular.module("ovh-api-services").service("OvhApiDbaasLogsTokensV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsTokensV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsTokensV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var tokenResource = $resource("/dbaas/logs/:serviceName/token/:tokenId", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        query: { method: "GET", isArray: true, cache: queryCache }
    });

    tokenResource.resetAllCache = function () {
        tokenResource.resetCache();
        tokenResource.resetQueryCache();
    };

    tokenResource.resetCache = function () {
        cache.removeAll();
    };

    tokenResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return tokenResource;
});
