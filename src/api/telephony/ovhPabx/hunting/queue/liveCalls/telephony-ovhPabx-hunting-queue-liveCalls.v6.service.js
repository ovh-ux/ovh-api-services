angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueLiveCallsV6", function ($resource) {
    "use strict";

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        eavesdrop: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/eavesdrop"
        },
        hangup: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/hangup"
        },
        hold: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/hold"
        },
        intercept: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/intercept"
        },
        transfer: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/transfer"
        },
        whisper: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/whisper"
        }
    });

    return res;
});
