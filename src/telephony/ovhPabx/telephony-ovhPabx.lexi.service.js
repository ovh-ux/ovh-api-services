angular.module("ovh-api-services").service("TelephonyOvhPabxLexi", function ($resource, TelephonyOvhPabx) {
    "use strict";

    var interceptor = {
        response: function (response) {
            TelephonyOvhPabx.resetCache();
            return response.resource;
        }
    };

    var telephonyOvhPabx = $resource("/telephony/:billingAccount/ovhPabx", {
        billingAccount: "@billingAccount"
    }, {
        query: { method: "GET", isArray: true, cache: TelephonyOvhPabx.cache },
        get: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName",
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting",
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent",
            isArray: true,
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId",
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        queryQueue: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue",
            isArray: true,
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        getQueue: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId",
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        updateQueue: {
            method: "PUT",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId",
            interceptor: interceptor
        },

        /*
            addQueue: {
                method:         "POST",
                url:            "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue",
                interceptor:    interceptor
            },
            */
        // @deprecated
        queryTier: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent",
            isArray: true,
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        getTier: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId",
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        updateTier: {
            method: "PUT",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId",
            interceptor: interceptor
        },

        // @deprecated
        addTier: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId/queue",
            interceptor: interceptor
        },

        // @deprecated
        deleteTier: {
            method: "DELETE",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId",
            interceptor: interceptor
        },
        soundUpload: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/soundUpload"
        }
    }
    );

    return telephonyOvhPabx;
});
