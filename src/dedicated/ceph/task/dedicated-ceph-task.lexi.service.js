angular.module("ovh-api-services").service("DedicatedCephTaskLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCephTaskLexi");

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
