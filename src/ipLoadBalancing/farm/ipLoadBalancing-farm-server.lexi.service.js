"use strict";

_.forEach(["tcp", "udp", "http"], function (type) {
    angular.module("ovh-api-services").service("IpLoadBalancingFarm" + _.capitalize(type) + "ServerLexi",
        ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
            var cache = $cacheFactory("IpLoadBalancingFarm" + _.capitalize(type) + "ServerLexi");
            var queryCache = $cacheFactory("IpLoadBalancingFarm" + _.capitalize(type) + "ServerLexiQuery");

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
