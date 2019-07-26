angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionAapi", function ($resource, OvhApiTelephonyTimeCondition) {
    "use strict";

    return $resource("/telephony/:billingAccount/timeCondition", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getConditions: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition",
            method: "GET",
            serviceType: "aapi",
            cache: OvhApiTelephonyTimeCondition.cache,
            isArray: true
        }
    });
});
