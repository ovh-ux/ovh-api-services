angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueAgent", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgentV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgentV7");
        }
    };
});
