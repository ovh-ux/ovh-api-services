angular.module("ovh-api-services").service("OvhApiMeApiApplicationV6", function ($cacheFactory, $resource) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeApiApplicationV6Query");
    var cache = $cacheFactory("OvhApiMeApiApplicationV6");
    var batchCache = $cacheFactory("OvhApiMeApiApplicationV6Batch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var resource = $resource("/me/api/application/:applicationId", {
        applicationId: "@applicationId"
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
            cache: batchCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        "delete": {
            method: "POST",
            interceptor: interceptor
        }
    });

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetBatchCache = function () {
        batchCache.removeAll();
    };

    resource.resetAllCache = function () {
        this.resetQueryCache();
        this.resetCache();
        this.resetBatchCache();
    };

    return resource;
});
