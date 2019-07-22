"use strict";

angular.module("ovh-api-services").service("OvhApiVrackIpLoadBalancingV6", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiVrackIpLoadBalancingV6");
    var queryCache = $cacheFactory("OvhApiVrackIpLoadBalancingV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var vrackIpLoadBalancing = $resource("/vrack/:serviceName/ipLoadbalancing/:ipLoadbalancing", {
        serviceName: "@serviceName",
        ipLoadbalancing: "@ipLoadbalancing"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/ipLoadbalancing",
            interceptor: interceptor
        }
    });

    vrackIpLoadBalancing.resetCache = function () {
        cache.removeAll();
    };

    vrackIpLoadBalancing.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vrackIpLoadBalancing;
});
