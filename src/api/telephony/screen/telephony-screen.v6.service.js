angular.module("ovh-api-services").service("OvhApiTelephonyScreenV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyScreenV6");
    var queryCache = $cacheFactory("OvhApiTelephonyScreenV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var screenResource = $resource("/telephony/:billingAccount/screen/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
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
        change: {
            method: "PUT",
            interceptor: interceptor
        }
    });

    screenResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return screenResource;
});
