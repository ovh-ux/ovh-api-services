angular.module("ovh-api-services").service("OvhApiTelephonyErika", function (apiv7) {
    "use strict";

    var telephonyEndpoint = apiv7("/telephony/:billingAccount", {
        billingAccount: "@billingAccount"
    });

    return telephonyEndpoint;

});
