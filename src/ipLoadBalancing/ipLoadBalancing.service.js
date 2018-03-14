angular.module("ovh-api-services").service("OvhApiIpLoadBalancing", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLoadBalancingLexi");
        },
        Farm: function () {
            return $injector.get("OvhApiIpLoadBalancingFarm");
        },
        Frontend: function () {
            return $injector.get("OvhApiIpLoadBalancingFrontend");
        },
        Ssl: function () {
            return $injector.get("OvhApiIpLoadBalancingSsl");
        },
        Task: function () {
            return $injector.get("OvhApiIpLoadBalancingTask");
        },
        Quota: function () {
            return $injector.get("OvhApiIpLoadBalancingQuota");
        },
        Vrack: function () {
            return $injector.get("OvhApiIpLoadBalancingVrack");
        },
        Zone: function () {
            return $injector.get("OvhApiIpLoadBalancingZone");
        }
    };
});
