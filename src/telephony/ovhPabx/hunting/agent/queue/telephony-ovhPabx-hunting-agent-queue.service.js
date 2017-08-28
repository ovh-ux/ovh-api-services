angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgentQueue", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentQueueLexi");
        }
    };
});
