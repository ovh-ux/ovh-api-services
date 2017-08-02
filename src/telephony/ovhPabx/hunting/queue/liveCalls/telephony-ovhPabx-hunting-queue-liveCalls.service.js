angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingQueueLiveCalls", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingQueueLiveCallsLexi");
        }
    };
});
