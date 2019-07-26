angular.module("ovh-api-services").service("OvhApiDbaasLogsClusterV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsClusterV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsClusterV6Query");

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
