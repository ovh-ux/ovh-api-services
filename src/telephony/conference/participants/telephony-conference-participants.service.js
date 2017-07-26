angular.module("ovh-api-services").service("TelephonyConferenceParticipants", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyConferenceParticipantsLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyConferenceParticipantsAapi");
        }
    };
});
