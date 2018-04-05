angular.module("ovh-api-services").service("OvhApiIpLoadBalancingSslV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingSslV6");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingSslV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipLoadBalancingSsl = $resource("/ipLoadbalancing/:serviceName/ssl/:sslId", {
        serviceName: "@serviceName",
        sslId: "@sslId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    ipLoadBalancingSsl.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancingSsl.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancingSsl;
});
