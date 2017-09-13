"use strict";

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingLexi", function ($resource, $cacheFactory) {
    var cache = $cacheFactory("OvhApiIpLoadBalancingLexi");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipLoadBalancing = $resource("/ipLoadbalancing/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: { method: "GET", url: "/ipLoadbalancing.json" },
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        put: { method: "PUT", interceptor: interceptor },
        availableZones: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/availableZones",
            cache: cache
        },
        availableFarmTypes: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/availableFarmType",
            cache: cache
        },
        failoverIp: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/failover ",
            cache: cache
        },
        natIp: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/natIp  ",
            cache: cache
        },
        serviceInfos: {
            method: "GET",
            url: "/ipLoadbalancing/:serviceName/serviceInfos",
            cache: cache
        },
        refresh: {
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/refresh"
        }
    });

    ipLoadBalancing.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancing.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancing;
});
