angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditions", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsLexi");
        },
        Conditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsConditions");
        }
    };
});
