angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplan", function ($injector) {
    "use strict";

    return {
        Extension: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtension");
        },
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanV6");
        }
    };
});
