angular.module("ovh-api-services").service("TelephonyLinePhoneRMALexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLinePhoneRMALexiCache");
    var queryCache = $cacheFactory("TelephonyLinePhoneRMALexiQueryCache");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/phone/rma/:id", {
        billingAccount: "@billingAccount",
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
            cache: cache,
            isArray: false
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        cancel: {
            method: "DELETE",
            interceptor: interceptor
        }
    });
});
