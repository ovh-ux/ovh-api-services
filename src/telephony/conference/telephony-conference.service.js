angular.module("ovh-api-services").service("OvhApiTelephonyConference", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyConferenceLexi");
        },
        Participants: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipants");
        },
        WebAccess: function () {
            return $injector.get("OvhApiTelephonyConferenceWebAccess");
        }
    };
});
