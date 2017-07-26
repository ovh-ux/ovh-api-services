"use strict";

angular.module("ovh-api-services").service("TelephonyAbbreviatedNumberLexi", function ($resource, TelephonyAbbreviatedNumber) {

    var interceptor = {
        response: function (response) {
            TelephonyAbbreviatedNumber.resetCache();
            return response.resource;
        }
    };

    return $resource("/telephony/:billingAccount/abbreviatedNumber", {
        billingAccount: "@billingAccount"
    }, {
        query: {
            method: "GET",
            isArray: true,
            url: "/telephony/:billingAccount/abbreviatedNumber",
            cache: TelephonyAbbreviatedNumber.cache
        },
        detail: {
            method: "GET",
            isArray: false,
            url: "/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber",
            cache: TelephonyAbbreviatedNumber.cache
        },
        remove: {
            method: "DELETE",
            isArray: false,
            url: "/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            isArray: false,
            url: "/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        },
        insert: {
            method: "POST",
            isArray: false,
            url: "/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        }
    });

});
