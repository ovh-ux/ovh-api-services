angular.module("ovh-api-services").service("TelephonyEasyHuntingSoundLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyHunting/:serviceName/sound/:soundId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        soundId: "@soundId"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        remove: {
            method: "DELETE"
        }
    });
});
