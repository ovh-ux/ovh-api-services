angular.module("ovh-api-services").service("OvhApiTelephonyVoicemail", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyVoicemailLexi");
        },
        Greetings: function () {
            return $injector.get("OvhApiTelephonyVoicemailGreetings");
        },
        Directories: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectories");
        }
    };
});
