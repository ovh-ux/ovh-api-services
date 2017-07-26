"use strict";

angular.module("ovh-api-services").service("TelephonyRedirectLexi", function ($resource) {

    return $resource("/telephony/:billingAccount/:featureType/:serviceName", {
        billingAccount: "@billingAccount",
        featureType: "@featureType", // redirect or ddi
        serviceName: "@serviceName"
    }, {
        change: {
            method: "POST",
            url: "/telephony/:billingAccount/:featureType/:serviceName/changeDestination ",
            isArray: false
        }
    });

});
