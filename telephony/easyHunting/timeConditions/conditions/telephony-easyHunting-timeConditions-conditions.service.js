angular.module("ovh-api-services").service("TelephonyEasyHuntingTimeConditionsConditions", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingTimeConditionsConditionsLexi");
        }
    };
});
