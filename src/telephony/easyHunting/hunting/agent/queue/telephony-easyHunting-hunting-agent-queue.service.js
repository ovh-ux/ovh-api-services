angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgentQueue", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentQueueLexi");
        }
    };
});
