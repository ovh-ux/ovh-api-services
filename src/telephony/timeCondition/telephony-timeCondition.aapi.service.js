angular.module("ovh-api-services").service("TelephonyTimeConditionAapi", function ($resource, TelephonyTimeCondition) {
    "use strict";

    return $resource("/telephony/:billingAccount/timeCondition", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getConditions: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition",
            method: "GET",
            serviceType: "aapi",
            cache: TelephonyTimeCondition.cache,
            isArray: true
        }
    });
});
