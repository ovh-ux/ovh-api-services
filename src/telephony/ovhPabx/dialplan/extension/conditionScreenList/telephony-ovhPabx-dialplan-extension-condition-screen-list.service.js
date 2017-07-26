angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtensionConditionScreenList", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionConditionScreenListLexi");
        }
    };
});
