angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHunting", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingLexi");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueue");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgent");
        }
    };
});
