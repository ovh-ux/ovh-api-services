angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingQueue", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingQueueLexi");
        },
        Agent: function () {
            return $injector.get("TelephonyOvhPabxHuntingQueueAgent");
        }
    };
});
