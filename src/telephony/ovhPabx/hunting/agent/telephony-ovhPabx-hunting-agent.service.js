angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgent", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentLexi");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentQueue");
        }
    };
});
