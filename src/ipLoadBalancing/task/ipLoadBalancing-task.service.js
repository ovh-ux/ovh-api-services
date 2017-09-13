angular.module("ovh-api-services").service("OvhApiIpLoadBalancingTask", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLoadBalancingTaskLexi");
        }
    };
});
