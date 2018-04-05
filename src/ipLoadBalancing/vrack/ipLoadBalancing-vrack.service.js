angular.module("ovh-api-services").service("OvhApiIpLoadBalancingVrack", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpLoadBalancingVrackV6");
        }
    };
});
