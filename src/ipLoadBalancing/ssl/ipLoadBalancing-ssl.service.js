angular.module("ovh-api-services").service("IpLoadBalancingSsl", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("IpLoadBalancingSslLexi");
        }
    };
});
