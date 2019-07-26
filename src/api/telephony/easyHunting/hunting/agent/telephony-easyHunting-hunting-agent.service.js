angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgent", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentV6");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentQueue");
        }
    };
});
