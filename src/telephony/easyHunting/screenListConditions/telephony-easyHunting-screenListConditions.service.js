angular.module("ovh-api-services").service("TelephonyEasyHuntingScreenListConditions", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingScreenListConditionsLexi");
        },
        Conditions: function () {
            return $injector.get("TelephonyEasyHuntingScreenListConditionsConditions");
        }
    };
});
