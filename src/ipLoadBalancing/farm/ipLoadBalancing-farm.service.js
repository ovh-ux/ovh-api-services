angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFarm", function ($injector) {
    "use strict";

    var services = _.reduce(["tcp", "udp", "http"], function (farm, type) {
        farm[_.capitalize(type)] = function () {
            return {
                Lexi: function () {
                    return $injector.get("OvhApiIpLoadBalancingFarm" + _.capitalize(type) + "Lexi");
                },
                Server: function () {
                    return $injector.get("OvhApiIpLoadBalancingFarm" + _.capitalize(type) + "Server");
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
