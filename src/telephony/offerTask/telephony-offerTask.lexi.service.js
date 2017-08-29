angular.module("ovh-api-services").service("OvhApiTelephonyOfferTaskLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/offerTask/:taskId", {
        billingAccount: "@billingAccount",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        }
    });
});
