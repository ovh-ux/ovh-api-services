angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneFunctionV7", function (apiv7) {
    "use strict";

    var telephonyLinePhoneFunctionEndpoint = apiv7("/telephony/:billingAccount/line/:serviceName/phone/functionKey/:keyNum", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        keyNum: "@keyNum"
    });

    return telephonyLinePhoneFunctionEndpoint;
});
