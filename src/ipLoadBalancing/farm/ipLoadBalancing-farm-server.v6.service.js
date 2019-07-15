import capitalize from 'lodash/capitalize';
import forEach from 'lodash/forEach';

forEach(["tcp", "udp", "http"], function (type) {
    "use strict";

    var serverType = capitalize(type);
    angular
        .module("ovh-api-services")
        .service("OvhApiIpLoadBalancingFarm" + serverType + "ServerV6",
                 ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
                     var cache = $cacheFactory("OvhApiIpLoadBalancingFarm" + serverType + "ServerV6");
                     var queryCache = $cacheFactory("OvhApiIpLoadBalancingFarm" + serverType + "ServerV6Query");

                     var interceptor = {
                         response: function (response) {
                             cache.remove(response.config.url);
                             queryCache.removeAll();
                             return response.resource;
                         }
                     };

                     var iplbFarm = $resource("/ipLoadbalancing/:serviceName/" + type + "/farm/:farmId/server/:serverId", {
                         serviceName: "@serviceName",
                         farmId: "@farmId",
                         serverId: "@serverId"
                     }, {
                         query: { method: "GET", isArray: true, cache: queryCache },
                         get: { method: "GET", cache: cache },
                         post: { method: "POST", interceptor: interceptor },
                         put: { method: "PUT", interceptor: interceptor },
                         "delete": { method: "DELETE", interceptor: interceptor }
                     });

                     iplbFarm.resetCache = function () {
                         cache.removeAll();
                     };

                     iplbFarm.resetQueryCache = function () {
                         queryCache.removeAll();
                     };

                     return iplbFarm;
                 }]);
});
