angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtension", function ($injector) {
    "use strict";

    return {
        Rule: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionRule");
        },
        ConditionScreenList: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionConditionScreenList");
        },
        ConditionTime: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionConditionTime");
        },
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionLexi");
        }
    };
});
