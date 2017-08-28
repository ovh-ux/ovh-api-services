angular.module("ovh-api-services").service("OvhApiMeTelephonySettingsLexi", function ($resource) {
    "use strict";

    return $resource("/me/telephony/settings", {}, {
        get: {
            method: "GET"
        },
        change: {
            method: "POST"
        }
    });
});
