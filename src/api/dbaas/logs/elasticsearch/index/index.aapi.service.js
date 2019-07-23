angular.module("ovh-api-services").service("OvhApiDbaasLogsIndexAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsIndexAapi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsIndexAapiQuery");

    var index = $resource("/dbaas/logs/:serviceName/index/:indexId", {
        serviceName: "@serviceName",
        indexId: "@indexId"
    }, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
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
