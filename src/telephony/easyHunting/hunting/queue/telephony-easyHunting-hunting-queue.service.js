angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueue", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLexi");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgent");
        },
        LiveCalls: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls");
        }
    };
});
