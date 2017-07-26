angular.module("ovh-api-services").service("CloudProjectUsageForecastLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CloudProjectUsageForecastLexi");

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
