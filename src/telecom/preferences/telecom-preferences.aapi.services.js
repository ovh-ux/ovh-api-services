angular.module("ovh-api-services").service("OvhApiTelecomPreferencesAapi", function ($resource, OvhApiTelecomPreferences) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiTelecomPreferences.resetCache();
            return response.data;
        }
    };

    return $resource("/telecom/preferences", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: false,
            cache: OvhApiTelecomPreferences.cache
        },
        write: {
            method: "POST",
            serviceType: "aapi",
            isArray: false,
            interceptor: interceptor
        }
    });
});
