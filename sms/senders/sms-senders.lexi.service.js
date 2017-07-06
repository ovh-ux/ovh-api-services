angular.module("ovh-api-services").service("SmsSendersLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsSendersLexi");
    var queryCache = $cacheFactory("SmsSendersLexiQuery");
    var batchCache = $cacheFactory("SmsSendersLexiBatch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            batchCache.remove(response.config.url);
            return response.resource;
        }
    };

    var sendersResource = $resource("/sms/:serviceName/senders/:sender", {
        serviceName: "@serviceName",
        sender: "@sender"
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
                "X-Ovh-Batch": "|"
            },
            cache: batchCache
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/senders",
            interceptor: interceptor
        }
    });

    sendersResource.resetCache = function () {
        cache.removeAll();
    };

    sendersResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    sendersResource.resetBatchCache = function () {
        batchCache.removeAll();
    };

    sendersResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
        this.resetBatchCache();
    };

    return sendersResource;
});
