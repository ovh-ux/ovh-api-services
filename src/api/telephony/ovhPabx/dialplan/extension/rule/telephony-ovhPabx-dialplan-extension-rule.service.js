angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionRule", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionRuleV6");
        }
    };
});
