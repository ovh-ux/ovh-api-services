angular.module("ovh-api-services").service("OvhApiDedicatedCloudTaskV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudTaskV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudTaskV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var baseURL = "/dedicatedCloud/:serviceName/task/:taskId";

    var taskResource = $resource(baseURL, {
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: cache, isArray: true },
        changeMaintenanceExecutionDate: {
            url: baseURL + "/changeMaintenanceExecutionDate",
            method: "POST",
            interceptor: interceptor
        },
        resetTaskState: {
            url: baseURL + "/resetTaskState",
            method: "POST",
            interceptor: interceptor
        }
    });

    taskResource.resetCache = function () {
        cache.removeAll();
    };

    taskResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return taskResource;
});
