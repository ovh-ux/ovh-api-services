angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueAgent", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueAgentV6");
        }
    };
});
