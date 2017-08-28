angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersOutgoingLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersOutgoingLexi");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersOutgoingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    return $resource("/sms/:serviceName/virtualNumbers/:number/outgoing/:id", {
        serviceName: "@serviceName",
        number: "@number",
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
        },
        getHlr: {
            method: "GET",
            url: "/sms/:serviceName/virtualNumbers/:number/outgoing/:id/hlr",
            cache: cache
        },
        resetCache: function () {
            cache.removeAll();
        }
    });
});
