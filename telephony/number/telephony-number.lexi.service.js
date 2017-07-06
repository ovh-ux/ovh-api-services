angular.module("ovh-api-services").service("TelephonyNumberLexi", function ($resource, TelephonyNumber) {
    "use strict";

    return $resource("/telephony/:billingAccount/number/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: TelephonyNumber.cache
        },
        getZones: {
            method: "GET",
            url: "/telephony/number/zones",
            isArray: true,
            cache: TelephonyNumber.cache
        },
        getRanges: {
            method: "GET",
            url: "/telephony/number/ranges",
            isArray: true,
            cache: TelephonyNumber.cache
        },
        getSpecificNumbers: {
            method: "GET",
            url: "/telephony/number/specificNumbers",
            isArray: true,
            cache: TelephonyNumber.cache
        },
        edit: {
            method: "PUT"
        },
        changeFeatureType: {
            method: "POST",
            url: "/telephony/:billingAccount/number/:serviceName/changeFeatureType",
            params: {
                billingAccount: "@billingAccount",
                serviceName: "@serviceName"
            },
            isArray: false
        },
        convertToLine: {
            method: "POST",
            url: "/telephony/:billingAccount/number/:serviceName/convertToLine"
        },
        cancelConvertToLine: {
            method: "POST",
            url: "/telephony/:billingAccount/number/:serviceName/cancelConvertToLine"
        },
        convertToLineAvailableOffers: {
            method: "GET",
            url: "/telephony/:billingAccount/number/:serviceName/convertToLineAvailableOffers"
        }
    });
});
