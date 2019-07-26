angular.module("ovh-api-services").service("OvhApiVrackIpLoadBalancing", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackIpLoadBalancingV6");
        }
    };
});
