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
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            params: {
                name: "@name",
                state: "@state"
            }
        },
        getGlobalTasks: {
            url: "/dedicatedCloud/:serviceName/globalTasks",
            method: "GET",
            isArray: true,
            queryParams: {
                datacenterId: "@datacenterId",
                "endDate.from": "@endDate.from",
                "endDate.to": "@endDate.to",
                "executionDate.from": "@executionDate.from",
                "executionDate.to": "@executionDate.to",
                filerId: "@filerId",
                hostId: "@hostId",
                "lastModificationDate.from": "@lastModificationDate.from",
                "lastModificationDate.to": "@lastModificationDate.to",
                name: "@name",
                networkAccessId: "@networkAccessId",
                orderId: "@orderId",
                parentTaskId: "@parentTaskId",
                state: "@state",
                userId: "@userId",
                vlanId: "@vlanId"
            }
        },
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
