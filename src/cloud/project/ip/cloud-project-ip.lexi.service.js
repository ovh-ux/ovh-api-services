angular.module("ovh-api-services").service("CloudProjectIpLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectIpLexiQuery");
    var cache = $cacheFactory("CloudProjectIpLexi");

    // var interceptor = {
    //     response: function (response) {
    //         cache.remove(response.config.url);
    //         queryCache.removeAll();
    //         return response.data;
    //     }
    // };

    var ips = $resource("/cloud/project/:serviceName/ip", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        }
    });

    ips.resetCache = function () {
        cache.removeAll();
    };

    ips.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ips;

});
