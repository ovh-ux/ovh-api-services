angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditions", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsV6");
        },
        Conditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsConditions");
        }
    };
});
