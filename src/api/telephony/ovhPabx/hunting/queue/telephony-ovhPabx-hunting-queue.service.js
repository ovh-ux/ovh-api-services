angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueue", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueV6");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueAgent");
        },
        LiveCalls: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueLiveCalls");
        }
    };
});
