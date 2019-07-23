angular.module("ovh-api-services").service("OvhApiIpLoadBalancingZoneV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingZoneV6");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingZoneV6Query");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
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
        cancelDelete: {
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/zone/:name/cancelTermination",
            interceptor: interceptor
        },
        "delete": {
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/zone/:name/terminate",
            interceptor: interceptor
        }
    });

    ipLoadBalancingZone.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancingZone.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancingZone;
});
