angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueue", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueLexi");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueAgent");
        },
        LiveCalls: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueLiveCalls");
        }
    };
});
