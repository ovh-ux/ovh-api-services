angular.module("ovh-api-services").service("OvhApiIpLoadBalancingVrackV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingVrackV6");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingVrackV6Query");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipLoadBalancingVrack = $resource("/ipLoadbalancing/:serviceName/vrack/network/:vrackNetworkId", {
        serviceName: "@serviceName",
        vrackNetworkId: "@vrackNetworkId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        getCreationRules: {
            cache: cache,
            method: "GET",
            url: "/ipLoadbalancing/:serviceName/vrack/networkCreationRules"
        },
        getStatus: {
            cache: cache,
            method: "GET",
            url: "/ipLoadbalancing/:serviceName/vrack/status"
        },
        updateFarmId: {
            interceptor: interceptor,
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/vrack/network/:vrackNetworkId/updateFarmId "
        }
    });

    ipLoadBalancingVrack.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancingVrack.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancingVrack;
});
