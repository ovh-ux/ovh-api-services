angular.module("ovh-api-services").service("OvhApiTelephonyServiceOfferTaskLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/service/:serviceName/offerTask/:taskId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
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
