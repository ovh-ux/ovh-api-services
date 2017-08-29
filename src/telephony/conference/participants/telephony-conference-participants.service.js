angular.module("ovh-api-services").service("OvhApiTelephonyConferenceParticipants", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipantsLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipantsAapi");
        }
    };
});
