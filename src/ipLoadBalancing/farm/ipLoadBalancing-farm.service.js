angular.module("ovh-api-services").service("IpLoadBalancingFarm", function ($injector) {
    "use strict";

    var services = _.reduce(["tcp", "udp", "http"], function (farm, type) {
        farm[_.capitalize(type)] = function () {
            return {
                Lexi: function () {
                    return $injector.get("IpLoadBalancingFarm" + _.capitalize(type) + "Lexi");
                },
                Server: function () {
                    return $injector.get("IpLoadBalancingFarm" + _.capitalize(type) + "Server");
                }
            };
        };
        return farm;
    }, {});

    services.Lexi = function () {
        return $injector.get("IpLoadBalancingFarmLexi");
    };

    return services;
});
