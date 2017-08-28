angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenList", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenListLexi");
        }
    };
});
