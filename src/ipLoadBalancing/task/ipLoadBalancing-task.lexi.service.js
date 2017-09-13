"use strict";

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingTaskLexi", function ($resource, $cacheFactory) {
    var cache = $cacheFactory("OvhApiIpLoadBalancingTaskLexi");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingTaskLexiQuery");

    var ipLoadBalancingTask = $resource("/ipLoadbalancing/:serviceName/task/:taskId", {
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET" }
    });

    ipLoadBalancingTask.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancingTask.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancingTask;
});
