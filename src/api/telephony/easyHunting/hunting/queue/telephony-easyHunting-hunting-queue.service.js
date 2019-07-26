angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueue", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueV6");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgent");
        },
        LiveCalls: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls");
        }
    };
});
