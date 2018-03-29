angular.module("ovh-api-services").service("OvhApiIpLoadBalancingQuota", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpLoadBalancingQuotaV6");
        }
    };
});
