angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV7");
        }
    };
});
