angular.module("ovh-api-services").service("TelephonyVoicemailDirectories", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyVoicemailDirectoriesLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyVoicemailDirectoriesErika");
        }
    };
});
