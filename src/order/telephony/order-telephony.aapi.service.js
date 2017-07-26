angular.module("ovh-api-services").service("OrderTelephonyAapi", function ($resource, OrderTelephony) {
    "use strict";

    return $resource("/order/telephony", {
        billingAccount: "@billingAccount"
    }, {
        billingAccounts: {
            method: "GET",
            url: "/order/telephony/all",
            isArray: true,
            serviceType: "aapi",
            cache: OrderTelephony.cache
        }
    });

});
