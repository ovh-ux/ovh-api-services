angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/hunting", {
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
