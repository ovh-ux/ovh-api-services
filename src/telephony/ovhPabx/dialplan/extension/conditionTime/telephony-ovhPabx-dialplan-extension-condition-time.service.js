angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionTime", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionTimeLexi");
        }
    };
});
