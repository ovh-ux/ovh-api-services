angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditions", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsLexi");
        },
        Conditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsConditions");
        }
    };
});
