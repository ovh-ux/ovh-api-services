angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingAgentQueue", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingAgentQueueLexi");
        }
    };
});
