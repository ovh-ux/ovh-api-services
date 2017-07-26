angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueue", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueLexi");
        },
        Agent: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueAgent");
        },
        LiveCalls: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueLiveCalls");
        }
    };
});
