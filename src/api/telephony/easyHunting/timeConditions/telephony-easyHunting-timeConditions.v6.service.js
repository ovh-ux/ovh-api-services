angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditionsV6", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyHunting/:serviceName/timeConditions", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        save: {
            method: "PUT"
        }
    });

});
