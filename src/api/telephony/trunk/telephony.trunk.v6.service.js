"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyTrunkV6", function ($resource) {

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
