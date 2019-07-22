angular.module("ovh-api-services").service("OvhApiWorkingStatusAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiWorkingStatusAapi");

    var workingStatusResource = $resource("/working-status/:product", {
        product: "@product"
    }, {
        get: {
            method: "GET",
            url: "/working-status/:product",
            serviceType: "aapi",
            cache: cache,
            isArray: true
        }
    });

    workingStatusResource.resetAllCache = function () {
        workingStatusResource.resetCache();
    };

    workingStatusResource.resetCache = function () {
        cache.removeAll();
    };

    return workingStatusResource;
});
