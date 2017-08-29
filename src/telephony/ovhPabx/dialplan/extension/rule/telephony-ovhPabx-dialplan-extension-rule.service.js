angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionRule", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionRuleLexi");
        }
    };
});
