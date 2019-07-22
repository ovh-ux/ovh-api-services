angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditionsConditions", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsConditionsV6");
        }
    };
});
