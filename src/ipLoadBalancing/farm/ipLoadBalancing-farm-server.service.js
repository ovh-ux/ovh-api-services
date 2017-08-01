"use strict";

_.forEach(["tcp", "udp", "http"], function (type) {
    angular.module("ovh-api-services").service("IpLoadBalancingFarm" + _.capitalize(type) + "Server",
        ["$injector", function ($injector) {
            return {
                Lexi: function () {
                    return $injector.get("IpLoadBalancingFarm" + _.capitalize(type) + "ServerLexi");
                }
            };
        }]);
});



