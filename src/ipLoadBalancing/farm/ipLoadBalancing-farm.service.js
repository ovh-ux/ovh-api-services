angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFarm", function ($injector) {
    "use strict";

    var services = _.reduce(["tcp", "udp", "http"], function (farm, type) {
        var farmType = _.capitalize(type);
        farm[farmType] = function () {
            return {
                Lexi: function () {
                    return $injector.get("OvhApiIpLoadBalancingFarm" + farmType + "Lexi");
                },
                Server: function () {
                    return $injector.get("OvhApiIpLoadBalancingFarm" + farmType + "Server");
                }
            };
        };
        return farm;
    }, {});

    services.Lexi = function () {
        return $injector.get("OvhApiIpLoadBalancingFarmLexi");
    };

    return services;
});
