angular.module("ovh-api-services").service("OvhApiDbaasLogsClusterLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsClusterLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsClusterLexiQuery");

    var clusterResource = $resource("/dbaas/logs/:serviceName/cluster/:clusterId", {
        serviceName: "@serviceName",
        clusterId: "@clusterId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache }
    });

    clusterResource.resetAllCache = function () {
        clusterResource.resetCache();
        clusterResource.resetQueryCache();
    };

    clusterResource.resetCache = function () {
        cache.removeAll();
    };

    clusterResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return clusterResource;
});
