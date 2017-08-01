angular.module("ovh-api-services").service("IpLoadBalancing", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("IpLoadBalancingLexi");
        },
        Farm: function () {
            return $injector.get("IpLoadBalancingFarm");
        },
        Frontend: function () {
            return $injector.get("IpLoadBalancingFrontend");
        },
        Ssl: function () {
            return $injector.get("IpLoadBalancingSsl");
        },
        Task: function () {
            return $injector.get("IpLoadBalancingTask");
        }
    };
});
