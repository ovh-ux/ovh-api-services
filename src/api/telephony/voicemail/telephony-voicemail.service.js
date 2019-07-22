angular.module("ovh-api-services").service("OvhApiTelephonyVoicemail", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyVoicemailV6");
        },
        Greetings: function () {
            return $injector.get("OvhApiTelephonyVoicemailGreetings");
        },
        Directories: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectories");
        }
    };
});
