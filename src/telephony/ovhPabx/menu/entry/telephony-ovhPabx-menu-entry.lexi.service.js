angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenuEntryLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/menu/:menuId/entry/:entryId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        menuId: "@menuId",
        entryId: "@entryId"
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
