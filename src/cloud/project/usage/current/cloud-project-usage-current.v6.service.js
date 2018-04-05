angular.module("ovh-api-services").service("OvhApiCloudProjectUsageCurrentV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectUsageCurrentV6");

    var usages = $resource("/cloud/project/:serviceName/usage/current", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache }
    });

    usages.resetCache = function () {
        cache.removeAll();
    };

    return usages;

});
