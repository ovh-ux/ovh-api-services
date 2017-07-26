angular.module("ovh-api-services").service("TelephonyEasyHuntingScreenListConditionsConditions", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingScreenListConditionsConditionsLexi");
        }
    };
});
