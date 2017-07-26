angular.module("ovh-api-services").service("TelephonyVoicemail", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyVoicemailLexi");
        },
        Greetings: function () {
            return $injector.get("TelephonyVoicemailGreetings");
        },
        Directories: function () {
            return $injector.get("TelephonyVoicemailDirectories");
        }
    };
});
