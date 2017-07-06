angular.module("ovh-api-services").service("TelephonyEasyPabxLexi", function ($resource, TelephonyEasyPabx) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyPabx/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: TelephonyEasyPabx.cache
        },
        get: {
            method: "GET",
            isArray: false,
            cache: TelephonyEasyPabx.cache
        },
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting",
            cache: TelephonyEasyPabx.cache
        },
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent",
            isArray: true,
            cache: TelephonyEasyPabx.cache
        },
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent/:agentNumber",
            params: {
                agentNumber: "@"
            },
            cache: TelephonyEasyPabx.cache
        }
    }
    );
});
