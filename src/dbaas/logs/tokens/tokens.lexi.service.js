angular.module("ovh-api-services").service("OvhApiDbaasLogsTokensLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsTokensLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsTokensLexiQuery");
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
