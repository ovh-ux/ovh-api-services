angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsErika");
        }
    };
});
