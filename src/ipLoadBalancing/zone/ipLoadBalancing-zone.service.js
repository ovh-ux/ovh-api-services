angular.module("ovh-api-services").service("OvhApiIpLoadBalancingZone", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLoadBalancingZoneLexi");
        }
    };
});
