angular.module("ovh-api-services").service("OvhApiTelephonyMiniPabxLexi", function ($resource, OvhApiTelephonyMiniPabx) {
    "use strict";

    return $resource("/telephony/:billingAccount/miniPabx/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiTelephonyMiniPabx.cache
        },
        get: {
            method: "GET",
            isArray: false,
            cache: OvhApiTelephonyMiniPabx.cache
        },
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting",
            cache: OvhApiTelephonyMiniPabx.cache
        },
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent",
            isArray: true,
            cache: OvhApiTelephonyMiniPabx.cache
        },
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent/:agentNumber",
            params: {
                agentNumber: "@"
            },
            cache: OvhApiTelephonyMiniPabx.cache
        }
    }
    );
});
