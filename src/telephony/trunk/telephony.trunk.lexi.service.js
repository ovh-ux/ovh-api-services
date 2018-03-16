"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyTrunkLexi", function ($resource) {

    return $resource("/telephony/:billingAccount/trunk/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getChannelsPacksRepartition: {
            method: "GET",
            url: "/telephony/:billingAccount/trunk/:serviceName/channelsPacksRepartition",
            isArray: false
        }
    });

});
