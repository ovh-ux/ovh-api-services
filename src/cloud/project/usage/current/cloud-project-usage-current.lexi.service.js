angular.module("ovh-api-services").service("OvhApiCloudProjectUsageCurrentLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectUsageCurrentLexi");

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
