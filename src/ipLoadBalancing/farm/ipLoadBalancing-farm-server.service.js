_.forEach(["tcp", "udp", "http"], function (type) {
    "use strict";

    var serverType = _.capitalize(type);
    angular
        .module("ovh-api-services")
        .service("OvhApiIpLoadBalancingFarm" + serverType + "Server",
                 ["$injector", function ($injector) {
                     return {
                         Lexi: function () {
                             return $injector.get("OvhApiIpLoadBalancingFarm" + serverType + "ServerLexi");
                         }
                     };
                 }]);
});

