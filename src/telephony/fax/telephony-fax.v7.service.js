angular.module("ovh-api-services").service("OvhApiTelephonyFaxV7", function (apiv7) {
    "use strict";

    var telephonyFaxEndpoint = apiv7("/telephony/:billingAccount/fax/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyFaxEndpoint;

});
