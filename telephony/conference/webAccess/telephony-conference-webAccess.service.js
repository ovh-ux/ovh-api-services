angular.module("ovh-api-services").service("TelephonyConferenceWebAccess", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyConferenceWebAccessLexi");
        }
    };
});
