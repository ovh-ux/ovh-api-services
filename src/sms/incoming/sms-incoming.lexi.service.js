angular.module("ovh-api-services").service("OvhApiSmsIncomingLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsIncomingLexi");
    var queryCache = $cacheFactory("OvhApiSmsIncomingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var incomingResource = $resource("/sms/:serviceName/incoming/:id", {
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
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    incomingResource.resetCache = function () {
        cache.removeAll();
    };

    incomingResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    incomingResource.resetAllCache = function () {
        this.resetQueryCache();
        this.resetCache();
    };

    return incomingResource;
});
