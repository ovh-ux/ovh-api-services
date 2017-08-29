angular.module("ovh-api-services").service("OvhApiCloudProjectIpFailoverLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectIpFailoverLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectIpFailoverLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var ips = $resource("/cloud/project/:serviceName/ip/failover/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        attach: {
            method: "POST",
            url: "/cloud/project/:serviceName/ip/failover/:id/attach",
            interceptor: interceptor
        },
        detach: {
            method: "POST",
            url: "/cloud/project/:serviceName/ip/failover/:id/detach",
            interceptor: interceptor
        }
    });

    ips.resetAllCache = function () {
        ips.resetCache();
        ips.resetQueryCache();
    };

    ips.resetCache = function () {
        cache.removeAll();
    };

    ips.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ips;

});
