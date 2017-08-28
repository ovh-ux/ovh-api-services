angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgent", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentLexi");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentQueue");
        }
    };
});
