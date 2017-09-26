angular.module("ovh-api-services").service("OvhApiTelephonyEasyPabxLexi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyPabx/:serviceName", {
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
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting"
        },
        updateHunting: {
            method: "PUT",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting"
        },
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent",
            isArray: true
        },
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent/:agentNumber",
            params: {
                agentNumber: "@"
            }
        }
    }
    );
});
