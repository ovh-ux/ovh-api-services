angular.module("ovh-api-services").service("OvhApiDbaasLogsIndexAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsIndexAapi");

    var index = $resource("/dbaas/logs/:serviceName/index/:indexId", {
        serviceName: "@serviceName",
        indexId: "@indexId"
    }, {
        get: {
            method: "GET",
            url: "/dbaas/logs/:serviceName/index/:indexId",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    index.resetAllCache = function () {
        index.resetCache();
    };

    index.resetCache = function () {
        cache.removeAll();
    };

    return index;
});
