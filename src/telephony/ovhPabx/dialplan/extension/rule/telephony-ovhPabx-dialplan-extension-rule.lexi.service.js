angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionRuleLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/dialplan/:dialplanId/extension/:extensionId/rule/:ruleId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        dialplanId: "@dialplanId",
        extensionId: "@extensionId",
        ruleId: "@ruleId"
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
