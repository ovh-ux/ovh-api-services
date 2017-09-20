angular.module("ovh-api-services").service("OvhApiIpLoadBalancingSsl", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLoadBalancingSslLexi");
        }
    };
});
