angular.module("ovh-api-services").service("TelephonyFaxErika", function (apiv7) {
    "use strict";

    var telephonyFaxEndpoint = apiv7("/telephony/:billingAccount/fax/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyFaxEndpoint;

});
