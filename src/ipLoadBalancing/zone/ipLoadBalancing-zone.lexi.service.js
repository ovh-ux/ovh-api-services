angular.module("ovh-api-services").service("OvhApiIpLoadBalancingZoneLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingZoneLexi");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingZoneLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipLoadBalancingZone = $resource("/ipLoadbalancing/:serviceName/zone/:name", {
        serviceName: "@serviceName",
        name: "@name"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    ipLoadBalancingZone.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancingZone.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancingZone;
});
