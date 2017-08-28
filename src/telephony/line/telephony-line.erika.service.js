angular.module("ovh-api-services").service("OvhApiTelephonyLineErika", function (apiv7) {
    "use strict";

    var telephonyLineEndpoint = apiv7("/telephony/:billingAccount/line/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyLineEndpoint;

});
