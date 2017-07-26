angular.module("ovh-api-services").service("TelephonyLinePhonePhonebookPhonebookContactLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLinePhonePhonebookPhonebookContactLexi");
    var queryCache = $cacheFactory("TelephonyLinePhonePhonebookPhonebookContactLexiQuery");
    var batchCache = $cacheFactory("TelephonyLinePhonePhonebookPhonebookContactLexiBatch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            batchCache.remove(response.config.url);
            return response.resource;
        }
    };

    var phonebookContactResource = $resource("/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey/phonebookContact/:id", {
        billingAccount: "@billingAccount",
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
            url: "/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey/phonebookContact",
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
