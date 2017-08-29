angular.module("ovh-api-services").service("OvhApiTelephonyLineOptionsLexi", function ($resource, OvhApiTelephonyLineOptions) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiTelephonyLineOptions.resetCache();
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
            cache: OvhApiTelephonyLineOptions.cache
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
            cache: OvhApiTelephonyLineOptions.cache
        },
        defaultCodecs: {
            url: "/telephony/:billingAccount/line/:serviceName/options/defaultCodecs",
            method: "GET",
            isArray: false,
            cache: OvhApiTelephonyLineOptions.cache,
            transformResponse: function (data) {
                // because $resource returns an array of char when response is a simple string
                return {
                    codecs: angular.fromJson(data)
                };
            }
        }
    });
});
