"use strict";

_.forEach(["tcp", "udp", "http"], function (type) {
    angular
        .module("ovh-api-services")
        .service("OvhApiIpLoadBalancingFarm" + _.capitalize(type) + "Server",
                 ["$injector", function ($injector) {
                     return {
                         Lexi: function () {
                             return $injector.get("OvhApiIpLoadBalancingFarm" + _.capitalize(type) + "ServerLexi");
                         }
                     };
                 }]);
});

