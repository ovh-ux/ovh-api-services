angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueLiveCalls", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueLiveCallsV6");
        }
    };
});
