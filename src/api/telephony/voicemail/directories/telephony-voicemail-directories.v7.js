angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailDirectoriesV7", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/voicemail/:serviceName/directories/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    });
});
