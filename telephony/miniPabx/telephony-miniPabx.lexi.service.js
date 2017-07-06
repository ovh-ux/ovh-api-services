angular.module("ovh-api-services").service("TelephonyMiniPabxLexi", function ($resource, TelephonyMiniPabx) {
    "use strict";

    return $resource("/telephony/:billingAccount/miniPabx/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: TelephonyMiniPabx.cache
        },
        get: {
            method: "GET",
            isArray: false,
            cache: TelephonyMiniPabx.cache
        },
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting",
            cache: TelephonyMiniPabx.cache
        },
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent",
            isArray: true,
            cache: TelephonyMiniPabx.cache
        },
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent/:agentNumber",
            params: {
                agentNumber: "@"
            },
            cache: TelephonyMiniPabx.cache
        }
    }
    );
});
