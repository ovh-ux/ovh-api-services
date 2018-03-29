angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHunting", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingV6");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueue");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgent");
        }
    };
});
