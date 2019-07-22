angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneV7", function (apiv7) {
    "use strict";

    var telephonyLinePhoneEndpoint = apiv7("/telephony/:billingAccount/line/:serviceName/phone", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyLinePhoneEndpoint;
});
