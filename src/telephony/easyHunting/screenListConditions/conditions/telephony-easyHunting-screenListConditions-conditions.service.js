angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditionsConditions", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsConditionsLexi");
        }
    };
});
