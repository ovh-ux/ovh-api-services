angular.module("ovh-api-services").service("OvhApiIpLoadBalancingQuotaLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingQuotaLexi");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingQuotaLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipLoadBalancingQuota = $resource("/ipLoadbalancing/:serviceName/quota/:zoneName", {
        serviceName: "@serviceName",
        zoneName: "@zoneName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        put: { method: "PUT", interceptor: interceptor }
    });

    ipLoadBalancingQuota.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancingQuota.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancingQuota;
});
