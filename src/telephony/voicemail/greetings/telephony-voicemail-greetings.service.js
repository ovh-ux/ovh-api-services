angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailGreetings", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyVoicemailGreetingsV6");
        }
    };
});
