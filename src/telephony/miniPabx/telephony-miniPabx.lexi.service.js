/**
 *  This is vocated to be removed.
 *  Done in best effort without separating routes.
 */
angular.module("ovh-api-services").service("OvhApiTelephonyMiniPabxLexi", function ($resource) {
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
                agentNumber: "@agentNumber"
            }
        },
        createAgent: {
            method: "POST",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent",
            isArray: false
        },
        saveAgent: {
            method: "PUT",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent/:agentNumber",
            isArray: false,
            params: {
                agentNumber: "@agentNumber"
            }
        },
        deleteAgent: {
            method: "DELETE",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent/:agentNumber",
            isArray: false,
            params: {
                agentNumber: "@agentNumber"
            }
        },
        getTones: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/tones",
            isArray: false
        },
        saveTones: {
            method: "PUT",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/tones",
            isArray: false
        },
        uploadTones: {
            method: "PUT",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/tones/toneUpload",
            isArray: false
        }
    });
});
