angular.module("ovh-api-services").service("OvhApiTelephonyMiniPabxLexi", function ($resource, OvhApiTelephonyMiniPabx) {
    "use strict";

    return $resource("/telephony/:billingAccount/miniPabx/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET",
            isArray: false
        },
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting"
        },
        updateHunting: {
            method: "PUT",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting"
        },
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent",
            isArray: true
        },
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent/:agentNumber",
            params: {
                agentNumber: "@"
            }
        }
    }
    );
});
