angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionTime", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionTimeV6");
        }
    };
});
