angular.module("ovh-api-services").service("OvhApiTelephonyConferenceWebAccess", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyConferenceWebAccessV6");
        }
    };
});
