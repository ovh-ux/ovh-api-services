angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/line/:serviceName/click2Call", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        post: {
            method: "POST",
            params: {
                calledNumber: "@calledNumber"
            }
        }
    });
});
