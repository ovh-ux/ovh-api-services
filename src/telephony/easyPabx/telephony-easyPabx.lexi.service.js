angular.module("ovh-api-services").service("OvhApiTelephonyEasyPabxLexi", function ($resource, OvhApiTelephonyEasyPabx) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyPabx/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiTelephonyEasyPabx.cache
        },
        get: {
            method: "GET",
            isArray: false,
            cache: OvhApiTelephonyEasyPabx.cache
        },
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting",
            cache: OvhApiTelephonyEasyPabx.cache
        },
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent",
            isArray: true,
            cache: OvhApiTelephonyEasyPabx.cache
        },
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent/:agentNumber",
            params: {
                agentNumber: "@"
            },
            cache: OvhApiTelephonyEasyPabx.cache
        }
    }
    );
});
