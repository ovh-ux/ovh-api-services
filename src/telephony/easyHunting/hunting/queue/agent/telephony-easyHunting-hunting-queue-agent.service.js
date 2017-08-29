angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueAgent", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgentLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgentErika");
        }
    };
});
