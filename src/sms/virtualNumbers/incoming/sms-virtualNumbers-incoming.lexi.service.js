angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersIncomingLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersIncomingLexi");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersIncomingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    return $resource("/sms/:serviceName/virtualNumbers/:number/incoming/:id", {
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
        resetCache: function () {
            cache.removeAll();
        }
    });
});
