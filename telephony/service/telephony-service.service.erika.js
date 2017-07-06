angular.module("ovh-api-services").service("TelephonyServiceErika", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/telephony/:billingAccount/service/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return endpoint;
});
