angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgent", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentV6");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentQueue");
        }
    };
});
