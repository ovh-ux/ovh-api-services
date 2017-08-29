angular.module("ovh-api-services").service("OvhApiCloudProjectUsageForecastLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectUsageForecastLexi");

    var usages = $resource("/cloud/project/:serviceName/usage/forecast", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache }
    });

    usages.resetCache = function () {
        cache.removeAll();
    };

    return usages;

});
