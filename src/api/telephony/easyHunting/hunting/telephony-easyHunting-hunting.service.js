angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHunting", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingV6");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueue");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgent");
        }
    };
});
