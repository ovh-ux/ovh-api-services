angular.module("ovh-api-services").service("TelephonyOvhPabxDialplan", function ($injector) {
    "use strict";

    return {
        Extension: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtension");
        },
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxDialplanLexi");
        }
    };
});
