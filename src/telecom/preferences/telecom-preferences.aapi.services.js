angular.module("ovh-api-services").service("TelecomPreferencesAapi", function ($resource, TelecomPreferences) {
    "use strict";

    var interceptor = {
        response: function (response) {
            TelecomPreferences.resetCache();
            return response.data;
        }
    };

    return $resource("/telecom/preferences", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: false,
            cache: TelecomPreferences.cache
        },
        write: {
            method: "POST",
            serviceType: "aapi",
            isArray: false,
            interceptor: interceptor
        }
    });
});
