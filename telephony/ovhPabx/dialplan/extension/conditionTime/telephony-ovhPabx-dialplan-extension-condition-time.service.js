angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtensionConditionTime", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionConditionTimeLexi");
        }
    };
});
