angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailDirectories", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectoriesV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectoriesV7");
        }
    };
});
