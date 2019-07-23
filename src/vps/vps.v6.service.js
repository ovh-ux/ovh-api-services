angular.module("ovh-api-services").service("OvhApiVpsV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVpsV6");
    var queryCache = $cacheFactory("OvhApiVpsV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var vps = $resource("/vps/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        getMonitoring: {
            url: "/vps/:serviceName/monitoring",
            method: "GET",
            period: "@period",
            type: "@type",
            cache: cache
        },
        availableUpgrade: {
            url: "/vps/:serviceName/availableUpgrade",
            method: "GET",
            isArray: true
        },
        version: {
            url: "/vps/:serviceName/version",
            method: "GET"
        },
        rebuild: {
            url: "/vps/:serviceName/rebuild",
            method: "POST",
            interceptor: interceptor
        },
        resintall: {
            url: "/vps/:serviceName/reinstall",
            method: "POST",
            interceptor: interceptor
        }
    });

    vps.resetCache = function () {
        cache.removeAll();
    };

    vps.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vps;
});
