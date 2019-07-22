import capitalize from 'lodash/capitalize';
import reduce from 'lodash/reduce';

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFrontend", function ($injector) {
    "use strict";

    var services = reduce(["tcp", "udp", "http"], function (frontend, type) {
        frontend[capitalize(type)] = function () {
            return {
                v6: function () {
                    return $injector.get("OvhApiIpLoadBalancingFrontend" + capitalize(type) + "V6");
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
