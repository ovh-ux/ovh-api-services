angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditionsConditionsLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyHunting/:serviceName/timeConditions/conditions/:conditionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        conditionId: "@conditionId"
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
