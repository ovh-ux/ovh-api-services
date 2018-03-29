angular.module("ovh-api-services").service("OvhApiCloudProjectIpV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectIpV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectIpV6");

    var ips = $resource("/cloud/project/:serviceName/ip", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        }
    });

    ips.resetCache = function () {
        cache.removeAll();
    };

    ips.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ips;

});
