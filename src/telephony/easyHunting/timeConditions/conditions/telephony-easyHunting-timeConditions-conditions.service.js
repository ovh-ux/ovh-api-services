angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditionsConditions", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsConditionsLexi");
        }
    };
});
