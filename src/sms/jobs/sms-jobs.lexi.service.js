angular.module("ovh-api-services").service("OvhApiSmsJobsLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsJobsLexi");
    var queryCache = $cacheFactory("OvhApiSmsJobsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var jobResource = $resource("/sms/:serviceName/jobs/:id", {
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
        },
        send: {
            method: "POST",
            isArray: false,
            interceptor: interceptor
        },
        getPtts: {
            method: "GET",
            url: "/sms/ptts",
            cache: cache
        }
    });

    jobResource.resetCache = function () {
        cache.removeAll();
    };

    jobResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    jobResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return jobResource;
});
