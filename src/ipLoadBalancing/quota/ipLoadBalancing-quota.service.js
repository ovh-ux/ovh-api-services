angular.module("ovh-api-services").service("OvhApiIpLoadBalancingQuota", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLoadBalancingQuotaLexi");
        }
    };
});
