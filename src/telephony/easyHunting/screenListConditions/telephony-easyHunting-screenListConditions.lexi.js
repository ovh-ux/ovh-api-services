angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditionsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingScreenListConditionsLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/screenListConditions", {
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
