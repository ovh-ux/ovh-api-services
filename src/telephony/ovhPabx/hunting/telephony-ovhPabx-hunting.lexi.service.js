angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    return res;
});
