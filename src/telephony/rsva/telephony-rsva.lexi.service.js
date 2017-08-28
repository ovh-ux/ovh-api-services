angular.module("ovh-api-services").service("OvhApiTelephonyRsvaLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/rsva/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        getAllowedRateCodes: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/allowedRateCodes",
            isArray: true
        },
        getCurrentRateCode: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/currentRateCode"
        },
        getScheduledRateCode: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/scheduledRateCode"
        },
        scheduleRateCode: {
            method: "POST",
            url: "/telephony/:billingAccount/rsva/:serviceName/scheduleRateCode"
        },
        cancelScheduledRateCode: {
            method: "POST",
            url: "/telephony/:billingAccount/rsva/:serviceName/cancelScheduledRateCode"
        }
    });
});
