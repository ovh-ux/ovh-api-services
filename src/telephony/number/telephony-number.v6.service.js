angular.module("ovh-api-services").service("OvhApiTelephonyNumberV6", function ($resource, OvhApiTelephonyNumber) {
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
            cache: OvhApiTelephonyNumber.cache
        },
        getZones: {
            method: "GET",
            url: "/telephony/number/zones",
            isArray: true,
            cache: OvhApiTelephonyNumber.cache
        },
        getRanges: {
            method: "GET",
            url: "/telephony/number/ranges",
            isArray: true,
            cache: OvhApiTelephonyNumber.cache
        },
        getSpecificNumbers: {
            method: "GET",
            url: "/telephony/number/specificNumbers",
            isArray: true,
            cache: OvhApiTelephonyNumber.cache
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
