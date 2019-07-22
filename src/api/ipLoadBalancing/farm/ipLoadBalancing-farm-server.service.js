import capitalize from 'lodash/capitalize';
import forEach from 'lodash/forEach';

forEach(["tcp", "udp", "http"], function (type) {
    "use strict";

    var serverType = capitalize(type);
    angular
        .module("ovh-api-services")
        .service("OvhApiIpLoadBalancingFarm" + serverType + "Server",
                 ["$injector", function ($injector) {
                     return {
                         v6: function () {
                             return $injector.get("OvhApiIpLoadBalancingFarm" + serverType + "ServerV6");
                         }
                     };
                 }]);
});

