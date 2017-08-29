angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallUserLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineClick2CallUserLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.data;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/click2CallUser/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: cache
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        get: {
            method: "GET",
            cache: cache,
            isArray: false
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        changePassword: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/click2CallUser/:id/changePassword",
            params: {
                billingAccount: "@billingAccount",
                serviceName: "@serviceName",
                id: "@id"
            },
            interceptor: interceptor
        },
        click2Call: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/click2CallUser/:id/click2Call",
            params: {
                billingAccount: "@billingAccount",
                serviceName: "@serviceName",
                id: "@id"
            },
            interceptor: interceptor
        }
    });
});
