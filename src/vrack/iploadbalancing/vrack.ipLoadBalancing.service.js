angular.module("ovh-api-services").service("OvhApiVrackIpLoadBalancing", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackIpLoadBalancingLexi");
        }
    };
});
