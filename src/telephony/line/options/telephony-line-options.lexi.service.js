angular.module("ovh-api-services").service("TelephonyLineOptionsLexi", function ($resource, TelephonyLineOptions) {
    "use strict";

    var interceptor = {
        response: function (response) {
            TelephonyLineOptions.resetCache();
            return response.resource;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/options", {
        billingAccountId: "@billingAccountId",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            isArray: false,
            cache: TelephonyLineOptions.cache
        },
        update: {
            method: "PUT",
            isArray: false,
            interceptor: interceptor
        },
        availableCodecs: {
            url: "/telephony/:billingAccount/line/:serviceName/options/availableCodecs",
            method: "GET",
            isArray: true,
            cache: TelephonyLineOptions.cache
        },
        defaultCodecs: {
            url: "/telephony/:billingAccount/line/:serviceName/options/defaultCodecs",
            method: "GET",
            isArray: false,
            cache: TelephonyLineOptions.cache,
            transformResponse: function (data) {
                // because $resource returns an array of char when response is a simple string
                return {
                    codecs: angular.fromJson(data)
                };
            }
        }
    });
});
