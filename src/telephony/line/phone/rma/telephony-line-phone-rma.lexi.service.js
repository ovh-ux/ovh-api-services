angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneRMALexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhoneRMALexiCache");
    var queryCache = $cacheFactory("OvhApiTelephonyLinePhoneRMALexiQueryCache");

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
