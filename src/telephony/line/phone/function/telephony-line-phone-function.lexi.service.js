angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneFunctionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhoneFunctionLexi");

    /**
     * uncomment when post
    **/
    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response.data;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/phone/functionKey/:keyNum", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        keyNum: "@keyNum"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: cache
        },
        get: {
            method: "GET",
            cache: cache
        },
        save: {
            method: "PUT",
            interceptor: interceptor
        },
        availableFunctions: {
            url: "/telephony/:billingAccount/line/:serviceName/phone/functionKey/:keyNum/availableFunction",
            params: {
                billingAccount: "@billingAccount",
                serviceName: "@serviceName",
                keyNum: "@keyNum"
            },
            method: "GET",
            isArray: true,
            cache: cache
        }
    });
});
