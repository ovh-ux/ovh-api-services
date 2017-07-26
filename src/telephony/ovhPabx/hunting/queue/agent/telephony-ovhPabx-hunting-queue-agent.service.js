angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingQueueAgent", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingQueueAgentLexi");
        }
    };
});
