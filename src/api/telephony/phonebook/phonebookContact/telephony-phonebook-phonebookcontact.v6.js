angular.module("ovh-api-services").service("OvhApiTelephonyPhonebookPhonebookContactV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyPhonebookPhonebookContactV6");
    var queryCache = $cacheFactory("OvhApiTelephonyPhonebookPhonebookContactV6Query");
    var batchCache = $cacheFactory("OvhApiTelephonyPhonebookPhonebookContactv6Batch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            batchCache.remove(response.config.url);
            return response.resource;
        }
    };

    var phonebookContactResource = $resource("/telephony/:billingAccount/phonebook/:bookKey/phonebookContact/:id", {
        billingAccount: "@billingAccount",
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
            url: "/telephony/:billingAccount/phonebook/:bookKey/phonebookContact",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
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
