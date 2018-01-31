angular.module("ovh-api-services").service("OvhApiIpLoadBalancingVrack", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLoadBalancingVrackLexi");
        }
    };
});
