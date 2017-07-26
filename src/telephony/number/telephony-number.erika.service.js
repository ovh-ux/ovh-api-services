angular.module("ovh-api-services").service("TelephonyNumberErika", function (apiv7) {
    "use strict";

    var telephonyNumberEndpoint = apiv7("/telephony/:billingAccount/number/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyNumberEndpoint;

});
