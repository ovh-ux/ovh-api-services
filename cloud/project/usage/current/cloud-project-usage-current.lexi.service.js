angular.module("ovh-api-services").service("CloudProjectUsageCurrentLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CloudProjectUsageCurrentLexi");

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
