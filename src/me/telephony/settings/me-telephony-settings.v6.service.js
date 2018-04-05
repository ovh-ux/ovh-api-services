angular.module("ovh-api-services").service("OvhApiMeTelephonySettingsV6", function ($resource) {
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
