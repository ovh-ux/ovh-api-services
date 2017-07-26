"use strict";

angular.module("ovh-api-services").service("TelephonyConferenceParticipantsAapi", function ($resource) {

    return $resource("/telephony/:billingAccount/conference/:serviceName/participants", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi"
        }
    });

});
