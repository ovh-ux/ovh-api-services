angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueueLiveCalls", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueLiveCallsLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueLiveCallsErika");
        }
    };
});
