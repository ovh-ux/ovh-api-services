angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditions", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsV6");
        },
        Conditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsConditions");
        }
    };
});
