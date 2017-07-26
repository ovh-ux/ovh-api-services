angular.module("ovh-api-services").service("TelephonyPortabilityLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/portability/:id", {
        billingAccount: "@billingAccount",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        getStatus: {
            method: "GET",
            url: "/telephony/:billingAccount/portability/:id/status",
            isArray: true
        }
    });
});

