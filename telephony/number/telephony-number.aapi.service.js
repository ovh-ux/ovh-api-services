angular.module("ovh-api-services").service("TelephonyNumberAapi", function ($resource, TelephonyNumber) {
    "use strict";

    return $resource("/telephony/:billingAccount/number", {
        billingAccount: "@billingAccount"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: TelephonyNumber.cache,
            serviceType: "aapi"
        },
        all: {
            method: "GET",
            url: "/telephony/numbers/all",
            isArray: true,
            cache: TelephonyNumber.cache,
            serviceType: "aapi"
        },
        prices: {
            method: "GET",
            url: "/telephony/:billingAccount/number/:country/prices",
            isArray: true,
            cache: TelephonyNumber.cache,
            serviceType: "aapi"
        },
        orderableByRange: {
            method: "GET",
            url: "/telephony/:country/:billingAccount/number/:type/range/:range",
            isArray: false,

            // cache      : TelephonyNumber.cache,
            serviceType: "aapi"
        }
    });
});
