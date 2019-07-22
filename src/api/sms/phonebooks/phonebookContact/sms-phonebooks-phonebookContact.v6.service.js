angular.module("ovh-api-services").service("OvhApiSmsPhonebooksPhonebookContactV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsPhonebooksPhonebookContactV6");
    var queryCache = $cacheFactory("OvhApiSmsPhonebooksPhonebookContactV6Query");
    var batchCache = $cacheFactory("OvhApiSmsPhonebooksPhonebookContactv6Batch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            batchCache.remove(response.config.url);
            return response.resource;
        }
    };

    var phonebookContactResource = $resource("/sms/:serviceName/phonebooks/:bookKey/phonebookContact/:id", {
        serviceName: "@serviceName",
        bookKey: "@bookKey",
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
            cache: batchCache
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/phonebooks/:bookKey/phonebookContact",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    phonebookContactResource.resetCache = function () {
        cache.removeAll();
    };

    phonebookContactResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    phonebookContactResource.resetBatchCache = function () {
        batchCache.removeAll();
    };

    phonebookContactResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
        this.resetBatchCache();
    };

    return phonebookContactResource;
});
