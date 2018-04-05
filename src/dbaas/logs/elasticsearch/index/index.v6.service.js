angular.module("ovh-api-services").service("OvhApiDbaasLogsIndexV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsIndexV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsIndexV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var index = $resource("/dbaas/logs/:serviceName/output/elasticsearch/index/:indexId", {
        serviceName: "@serviceName",
        indexId: "@indexId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    index.resetAllCache = function () {
        index.resetCache();
        index.resetQueryCache();
    };

    index.resetCache = function () {
        cache.removeAll();
    };

    index.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return index;
});
