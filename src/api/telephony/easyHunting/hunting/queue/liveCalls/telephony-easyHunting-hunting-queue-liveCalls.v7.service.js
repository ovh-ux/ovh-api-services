angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId",
        id: "@id"
    });

    return endpoint;
});
