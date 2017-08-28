angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHunting", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingLexi");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueue");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgent");
        }
    };
});
