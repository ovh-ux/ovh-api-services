angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgentQueue", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentQueueV6");
        }
    };
});
