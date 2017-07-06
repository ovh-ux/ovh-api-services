angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingAgent", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingAgentLexi");
        },
        Queue: function () {
            return $injector.get("TelephonyEasyHuntingHuntingAgentQueue");
        }
    };
});
