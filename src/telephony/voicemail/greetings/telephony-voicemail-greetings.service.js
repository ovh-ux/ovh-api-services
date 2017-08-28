angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailGreetings", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyVoicemailGreetingsLexi");
        }
    };
});
