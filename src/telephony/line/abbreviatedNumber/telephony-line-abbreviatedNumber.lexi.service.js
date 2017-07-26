"use strict";

angular.module("ovh-api-services").service("TelephonyLineAbbreviatedNumberLexi", function ($resource, TelephonyLineAbbreviatedNumber) {

    var interceptor = {
        response: function (response) {
            TelephonyLineAbbreviatedNumber.resetCache();
            return response.resource;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/abbreviatedNumber", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber",
            cache: TelephonyLineAbbreviatedNumber.cache
        },
        detail: {
            method: "GET",
            isArray: false,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber",
            cache: TelephonyLineAbbreviatedNumber.cache
        },
        remove: {
            method: "DELETE",
            isArray: false,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            isArray: false,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        },
        insert: {
            method: "POST",
            isArray: false,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        }
    });

});
