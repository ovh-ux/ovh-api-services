angular.module("ovh-api-services").service("OvhApiMeApiCredentialV6", function ($cacheFactory, $resource) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeApiCredentialV6Query");
    var cache = $cacheFactory("OvhApiMeApiCredentialV6");
    var batchCache = $cacheFactory("OvhApiMeApiCredentialV6Batch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var resource = $resource("/me/api/credential/:credentialId", {
        credentialId: "@credentialId"
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
            method: "DELETE",
            interceptor: interceptor
        },
        application: {
            method: "GET",
            url: "/me/api/credential/:credentialId/application",
            cache: cache,
            params: {
                credentialId: "@credentialId"
            }
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
