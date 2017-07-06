angular.module("ovh-api-services").service("TelephonyEasyHuntingHunting", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingLexi");
        },
        Queue: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueue");
        },
        Agent: function () {
            return $injector.get("TelephonyEasyHuntingHuntingAgent");
        }
    };
});
