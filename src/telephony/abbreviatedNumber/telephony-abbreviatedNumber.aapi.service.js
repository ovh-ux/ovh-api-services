angular.module("ovh-api-services").service("OvhApiTelephonyAbbreviatedNumberAapi", function ($resource, OvhApiTelephonyAbbreviatedNumber) {
    "use strict";

    return $resource("/telephony/:billingAccount/abbreviatedNumber", {
        billingAccount: "@billingAccount"
    }, {
        query: {
            method: "GET",
            url: "/telephony/:billingAccount/abbreviatedNumber",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiTelephonyAbbreviatedNumber.cache
        }
    });
});
