angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgentQueue", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentQueueV6");
        }
    };
});
