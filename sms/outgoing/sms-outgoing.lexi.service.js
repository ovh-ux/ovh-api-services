angular.module("ovh-api-services").service("SmsOutgoingLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsOutgoingLexi");
    var queryCache = $cacheFactory("SmsOutgoingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var outgoingResource = $resource("/sms/:serviceName/outgoing/:id", {
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
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        getHlr: {
            method: "GET",
            url: "/sms/:serviceName/outgoing/:id/hlr",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        }
    });

    outgoingResource.resetCache = function () {
        cache.removeAll();
    };

    outgoingResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    outgoingResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return outgoingResource;
});
