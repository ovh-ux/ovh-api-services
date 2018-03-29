angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFrontend", function ($injector) {
    "use strict";

    var services = _.reduce(["tcp", "udp", "http"], function (frontend, type) {
        frontend[_.capitalize(type)] = function () {
            return {
                v6: function () {
                    return $injector.get("OvhApiIpLoadBalancingFrontend" + _.capitalize(type) + "V6");
                }
            };
        };
        return frontend;
    }, {});

    services.v6 = function () {
        return $injector.get("OvhApiIpLoadBalancingFrontendV6");
    };

    return services;
});
