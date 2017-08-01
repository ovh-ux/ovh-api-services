angular.module("ovh-api-services").service("IpLoadBalancingTask", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("IpLoadBalancingTaskLexi");
        }
    };
});
