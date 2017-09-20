angular.module("ovh-api-services").service("OvhApiIpLoadBalancingQuotaLexi", function ($resource) {
    "use strict";

    var ipLoadBalancingTask = $resource("/ipLoadbalancing/:serviceName/quota/:zoneName", {
        serviceName: "@serviceName",
        zoneName: "@zoneName"
    });

    return ipLoadBalancingTask;
});
