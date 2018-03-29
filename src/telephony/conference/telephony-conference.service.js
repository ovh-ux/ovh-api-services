angular.module("ovh-api-services").service("OvhApiTelephonyConference", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyConferenceV6");
        },
        Participants: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipants");
        },
        WebAccess: function () {
            return $injector.get("OvhApiTelephonyConferenceWebAccess");
        }
    };
});
