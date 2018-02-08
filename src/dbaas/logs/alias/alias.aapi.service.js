angular.module("ovh-api-services").service("OvhApiDbaasLogsAliasAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsAliasAapi");
    var alias = $resource("/dbaas/logs/:serviceName/alias/:aliasId", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache
        }
    });

    alias.resetAllCache = function () {
        alias.resetCache();
    };

    alias.resetCache = function () {
        cache.removeAll();
    };

    return alias;
});

