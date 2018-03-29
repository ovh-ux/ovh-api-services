angular.module("ovh-api-services").service("OvhApiCloudProjectUsageForecastV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectUsageForecastV6");

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
