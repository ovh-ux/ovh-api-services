angular.module("ovh-api-services").service("OvhApiTelephonyTaskLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/task/:taskId", {
        billingAccount: "@billingAccount",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET",
            isArray: false
        }
    });
});
