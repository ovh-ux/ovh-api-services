angular.module("ovh-api-services").service("TelephonyEasyHuntingTimeConditions", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingTimeConditionsLexi");
        },
        Conditions: function () {
            return $injector.get("TelephonyEasyHuntingTimeConditionsConditions");
        }
    };
});
