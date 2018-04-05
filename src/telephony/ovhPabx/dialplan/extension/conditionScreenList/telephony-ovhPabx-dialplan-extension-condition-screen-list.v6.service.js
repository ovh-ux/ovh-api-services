angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenListV6", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/dialplan/:dialplanId/extension/:extensionId/conditionScreenList/:conditionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        dialplanId: "@dialplanId",
        extensionId: "@extensionId",
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
            method: "PUT",
            isArray: false
        },
        create: {
            method: "POST",
            isArray: false
        }
    });
});
