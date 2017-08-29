angular.module("ovh-api-services").service("OvhApiOrderTelephonyAapi", function ($resource, OvhApiOrderTelephony) {
    "use strict";

    return $resource("/order/telephony", {
        billingAccount: "@billingAccount"
    }, {
        billingAccounts: {
            method: "GET",
            url: "/order/telephony/all",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiOrderTelephony.cache
        }
    });

});
