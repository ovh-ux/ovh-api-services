angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplan", function ($injector) {
    "use strict";

    return {
        Extension: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtension");
        },
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanLexi");
        }
    };
});
