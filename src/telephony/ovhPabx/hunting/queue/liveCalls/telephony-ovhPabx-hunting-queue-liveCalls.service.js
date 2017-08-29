angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueLiveCalls", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueLiveCallsLexi");
        }
    };
});
