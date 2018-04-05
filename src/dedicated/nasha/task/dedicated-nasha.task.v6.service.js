angular.module("ovh-api-services").service("OvhApiDedicatedNashaTaskV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedNashaTaskV6Query");

    var resource = $resource("/dedicated/nasha/:serviceName/task/:taskId", {
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            params: {
                operation: "@operation",
                status: "@status"
            }
        },
        get: {
            method: "GET",
            cache: cache
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
});
