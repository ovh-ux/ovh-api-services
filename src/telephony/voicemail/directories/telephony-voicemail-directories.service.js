angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailDirectories", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectoriesLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectoriesErika");
        }
    };
});
