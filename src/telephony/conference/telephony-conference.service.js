angular.module("ovh-api-services").service("TelephonyConference", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyConferenceLexi");
        },
        Participants: function () {
            return $injector.get("TelephonyConferenceParticipants");
        },
        WebAccess: function () {
            return $injector.get("TelephonyConferenceWebAccess");
        }
    };
});
