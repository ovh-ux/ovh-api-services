angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebookV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookV6");
    var queryCache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var phonebookResource = $resource("/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        bookKey: "@bookKey"
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
        create: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/phonebook",
            interceptor: interceptor,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { bookKey: data };
                }
                return null;
            }
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        getExport: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey/export"
        },
        "import": {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey/import",
            interceptor: interceptor
        }
    });

    phonebookResource.resetCache = function () {
        cache.removeAll();
    };

    phonebookResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    phonebookResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return phonebookResource;
});
