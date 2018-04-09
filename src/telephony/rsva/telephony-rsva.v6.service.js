angular.module("ovh-api-services").service("OvhApiTelephonyRsvaV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyRsvaV6");

    var interceptor = function (response) {
        cache.removeAll();
        return response.data;
    };

    return $resource("/telephony/:billingAccount/rsva/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: cache,
            isArray: true
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        getAllowedRateCodes: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/allowedRateCodes",
            cache: cache,
            isArray: true
        },
        getCurrentRateCode: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/currentRateCode",
            cache: cache
        },
        getScheduledRateCode: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/scheduledRateCode",
            cache: cache
        },
        scheduleRateCode: {
            method: "POST",
            url: "/telephony/:billingAccount/rsva/:serviceName/scheduleRateCode",
            interceptor: interceptor
        },
        cancelScheduledRateCode: {
            method: "POST",
            url: "/telephony/:billingAccount/rsva/:serviceName/cancelScheduledRateCode",
            interceptor: interceptor
        },
        resetCache: function () {
            cache.removeAll();
        }
    });
});
