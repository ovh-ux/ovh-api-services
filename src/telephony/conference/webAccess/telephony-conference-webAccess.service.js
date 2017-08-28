angular.module("ovh-api-services").service("OvhApiTelephonyConferenceWebAccess", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyConferenceWebAccessLexi");
        }
    };
});
