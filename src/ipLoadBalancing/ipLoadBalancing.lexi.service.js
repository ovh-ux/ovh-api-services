angular.module("ovh-api-services").service("OvhApiIpLoadBalancingLexi", function ($resource, $cacheFactory) {
    "use strict";

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
        availableFarmProbes: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/availableFarmProbes",
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
        pendingChanges: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/pendingChanges"
        },
        refresh: {
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/refresh"
        },
        serviceInfos: {
            method: "GET",
            url: "/ipLoadbalancing/:serviceName/serviceInfos",
            cache: cache
        },
        freeCertificate: {
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/freeCertificate"
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
