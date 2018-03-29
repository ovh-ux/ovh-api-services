angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFarm", function ($injector) {
    "use strict";

    var services = _.reduce(["tcp", "udp", "http"], function (farm, type) {
        var farmType = _.capitalize(type);
        farm[farmType] = function () {
            return {
                v6: function () {
                    return $injector.get("OvhApiIpLoadBalancingFarm" + farmType + "V6");
                },
                Server: function () {
                    return $injector.get("OvhApiIpLoadBalancingFarm" + farmType + "Server");
                }
            };
        };
        return farm;
    }, {});

    services.v6 = function () {
        return $injector.get("OvhApiIpLoadBalancingFarmV6");
    };

    return services;
});
