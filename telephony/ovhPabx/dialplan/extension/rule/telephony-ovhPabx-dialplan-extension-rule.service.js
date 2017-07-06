angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtensionRule", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionRuleLexi");
        }
    };
});
