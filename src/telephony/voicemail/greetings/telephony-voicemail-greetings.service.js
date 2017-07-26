angular.module("ovh-api-services").service("TelephonyVoicemailGreetings", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyVoicemailGreetingsLexi");
        }
    };
});
