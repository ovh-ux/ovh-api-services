angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersJobsV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersJobsV6");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersJobsV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    return $resource("/sms/:serviceName/virtualNumbers/:number/jobs/:id", {
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
        send: {
            method: "POST",
            isArray: false,
            interceptor: interceptor
        },
        resetCache: function () {
            cache.removeAll();
        }
    });
});
