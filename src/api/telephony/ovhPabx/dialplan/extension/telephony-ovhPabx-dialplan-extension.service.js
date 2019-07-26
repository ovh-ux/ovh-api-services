angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtension", function ($injector) {
    "use strict";

    return {
        Rule: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionRule");
        },
        ConditionScreenList: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenList");
        },
        ConditionTime: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionTime");
        },
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionV6");
        }
    };
});
