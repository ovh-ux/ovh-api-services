angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditionsConditions", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsConditionsV6");
        }
    };
});
