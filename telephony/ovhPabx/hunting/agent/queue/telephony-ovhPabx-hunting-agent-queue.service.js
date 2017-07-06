angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingAgentQueue", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingAgentQueueLexi");
        }
    };
});
