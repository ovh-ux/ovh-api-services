"use strict";

angular.module("ovh-api-services").service("IpLoadBalancingTaskLexi",
    function ($resource, $cacheFactory) {
        var ipLoadBalancingTask = $resource("/ipLoadbalancing/:serviceName/task/:taskId", {
            serviceName: "@serviceName",
            taskId: "@taskId"
        }, {
            query: { method: "GET", isArray: true },
            get: { method: "GET" }
        });

        return ipLoadBalancingTask;
    });
