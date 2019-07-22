angular.module("ovh-api-services").service("OvhApiTelephonyConferenceParticipants", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipantsV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipantsAapi");
        }
    };
});
