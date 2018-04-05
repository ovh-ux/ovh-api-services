angular.module("ovh-api-services").service("OvhApiIpLoadBalancingTask", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpLoadBalancingTaskV6");
        }
    };
});
