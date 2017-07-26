angular.module("ovh-api-services").service("TelephonyAbbreviatedNumberAapi", function ($resource, TelephonyAbbreviatedNumber) {
    "use strict";

    return $resource("/telephony/:billingAccount/abbreviatedNumber", {
        billingAccount: "@billingAccount"
    }, {
        query: {
            method: "GET",
            url: "/telephony/:billingAccount/abbreviatedNumber",
            serviceType: "aapi",
            isArray: true,
            cache: TelephonyAbbreviatedNumber.cache
        }
    });
});
