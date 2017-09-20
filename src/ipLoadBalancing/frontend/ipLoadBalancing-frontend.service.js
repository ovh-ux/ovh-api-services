angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFrontend", function ($injector) {
    "use strict";

    var services = _.reduce(["tcp", "udp", "http"], function (frontend, type) {
        frontend[_.capitalize(type)] = function () {
            return {
                Lexi: function () {
                    return $injector.get("OvhApiIpLoadBalancingFrontend" + _.capitalize(type) + "Lexi");
                }
            };
        };
        return frontend;
    }, {});

    services.Lexi = function () {
        return $injector.get("OvhApiIpLoadBalancingFrontendLexi");
    };

    return services;
});
