angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionCondition", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyTimeConditionConditionLexi");
        }
    };
});
