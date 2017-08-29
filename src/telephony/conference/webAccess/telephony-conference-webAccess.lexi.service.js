angular.module("ovh-api-services").service("OvhApiTelephonyConferenceWebAccessLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/conference/:serviceName/webAccess/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        create: {
            method: "POST"
        },
        remove: {
            method: "DELETE"
        }
    });
});
