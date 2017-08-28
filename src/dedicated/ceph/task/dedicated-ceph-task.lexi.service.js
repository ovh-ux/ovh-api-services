angular.module("ovh-api-services").service("OvhApiDedicatedCephTaskLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephTaskLexi");

    var resource = $resource("/dedicated/ceph/:serviceName/task/:taskId", {
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
