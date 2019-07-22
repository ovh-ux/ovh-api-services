angular.module("ovh-api-services").service("OvhApiDbaasLogsInputAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsInputAapi");

    var input = $resource("/dbaas/logs/:serviceName/input/:inputId", {
        serviceName: "@serviceName",
        inputId: "@inputId"
    }, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    input.resetAllCache = function () {
        input.resetCache();
    };

    input.resetCache = function () {
        cache.removeAll();
    };

    return input;
});
