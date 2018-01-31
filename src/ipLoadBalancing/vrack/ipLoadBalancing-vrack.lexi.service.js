angular.module("ovh-api-services").service("OvhApiIpLoadBalancingVrackLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingVrackLexi");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingVrackLexiQuery");

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
            method: "GET",
            url: "/ipLoadbalancing/:serviceName/vrack/networkCreationRules",
            interceptor: interceptor
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
