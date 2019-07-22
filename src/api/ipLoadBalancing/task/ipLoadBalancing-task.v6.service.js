angular.module("ovh-api-services").service("OvhApiIpLoadBalancingTaskV6", function ($resource) {
    "use strict";

    var ipLoadBalancingTask = $resource("/ipLoadbalancing/:serviceName/task/:taskId", {
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET" }
    });

    return ipLoadBalancingTask;
});
