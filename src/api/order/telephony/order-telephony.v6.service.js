angular.module("ovh-api-services").service("OvhApiOrderTelephonyV6", function ($resource, OvhApiOrderTelephony) {
    "use strict";

    return $resource("/order/telephony/:billingAccount", {
        billingAccount: "@billingAccount"
    }, {
        get: {
            method: "GET",
            isArray: true,
            cache: OvhApiOrderTelephony.cache
        },
        billingAccounts: {
            method: "GET",
            url: "/order/telephony",
            isArray: true,
            cache: OvhApiOrderTelephony.cache
        },
        getNewBillingAccount: {
            method: "GET",
            url: "/order/telephony/new",
            preventLogout: true // api returns 401 for untrusted account
        },
        orderNewBillingAccount: {
            method: "POST",
            url: "/order/telephony/new",
            preventLogout: true // api returns 401 for untrusted account
        },
        getNumberGeographical: {
            method: "GET",
            url: "/order/telephony/:billingAccount/numberGeographic",
            isArray: false,
            cache: OvhApiOrderTelephony.cache
        },
        getNumberNogeographical: {
            method: "GET",
            url: "/order/telephony/:billingAccount/numberNogeographic",
            isArray: false,
            cache: OvhApiOrderTelephony.cache
        },
        getNumberSpecial: {
            method: "GET",
            url: "/order/telephony/:billingAccount/numberSpecial",
            isArray: false,
            cache: OvhApiOrderTelephony.cache
        },
        orderNumberGeographical: {
            method: "POST",
            url: "/order/telephony/:billingAccount/numberGeographic",
            isArray: false
        },
        orderNumberNogeographical: {
            method: "POST",
            url: "/order/telephony/:billingAccount/numberNogeographic",
            isArray: false
        },
        orderNumberSpecial: {
            method: "POST",
            url: "/order/telephony/:billingAccount/numberSpecial",
            isArray: false
        },
        getPortability: {
            method: "GET",
            url: "/order/telephony/:billingAccount/portability",
            isArray: false
        },
        orderPortability: {
            method: "POST",
            url: "/order/telephony/:billingAccount/portability",
            isArray: false
        },
        getAccessories: {
            method: "GET",
            url: "/order/telephony/:billingAccount/accessories",
            isArray: false
        },
        orderAccessories: {
            method: "POST",
            url: "/order/telephony/:billingAccount/accessories",
            isArray: false
        },
        getSecurityDeposit: {
            method: "GET",
            url: "/order/telephony/:billingAccount/securityDeposit",
            isArray: false
        },
        orderSecurityDeposit: {
            method: "POST",
            url: "/order/telephony/:billingAccount/securityDeposit",
            isArray: false
        },
        getHardware: {
            method: "GET",
            url: "/order/telephony/lines/:serviceName/hardware",
            isArray: false
        },
        orderHardware: {
            method: "POST",
            url: "/order/telephony/lines/:serviceName/hardware",
            isArray: false
        },
        getSimultaneousLines: {
            method: "GET",
            url: "/order/telephony/lines/:serviceName/updateSimultaneousChannels",
            isArray: false
        },
        orderSimultaneousLines: {
            method: "POST",
            url: "/order/telephony/lines/:serviceName/updateSimultaneousChannels",
            isArray: false
        },
        getSimultaneousTrunkLines: {
            method: "GET",
            url: "/order/telephony/trunks/:serviceName/updateSimultaneousChannels",
            isArray: false
        },
        orderSimultaneousTrunkLines: {
            method: "POST",
            url: "/order/telephony/trunks/:serviceName/updateSimultaneousChannels",
            isArray: false
        }
    });

});
