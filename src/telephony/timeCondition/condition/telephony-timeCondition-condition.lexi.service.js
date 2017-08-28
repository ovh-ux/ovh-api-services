angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionConditionLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/timeCondition/:serviceName/condition/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT"
        },
        create: {
            method: "POST"
        }
    });

});
