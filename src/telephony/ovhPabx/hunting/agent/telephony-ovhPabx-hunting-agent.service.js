angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingAgent", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingAgentLexi");
        },
        Queue: function () {
            return $injector.get("TelephonyOvhPabxHuntingAgentQueue");
        }
    };
});
