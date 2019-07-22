angular.module("ovh-api-services").service("OvhApiSmsHlrV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsHlrV6");
    var queryCache = $cacheFactory("OvhApiSmsHlrV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var hlr = $resource("/sms/:serviceName/hlr/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        send: {
            method: "POST",
            interceptor: interceptor
        },
        getOperator: {
            method: "GET",
            url: "/sms/:serviceName/hlr/:id/operator",
            cache: cache
        }
    });

    hlr.resetCache = function () {
        cache.removeAll();
    };

    hlr.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return hlr;
});
