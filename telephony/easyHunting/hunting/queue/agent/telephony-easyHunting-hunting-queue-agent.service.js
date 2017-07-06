angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueueAgent", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueAgentLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueAgentErika");
        }
    };
});
