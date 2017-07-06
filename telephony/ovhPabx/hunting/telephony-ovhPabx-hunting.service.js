angular.module("ovh-api-services").service("TelephonyOvhPabxHunting", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingLexi");
        },
        Queue: function () {
            return $injector.get("TelephonyOvhPabxHuntingQueue");
        },
        Agent: function () {
            return $injector.get("TelephonyOvhPabxHuntingAgent");
        }
    };
});
