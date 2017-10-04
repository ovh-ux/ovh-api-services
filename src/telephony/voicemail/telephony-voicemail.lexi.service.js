"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailLexi", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiTelephonyVoicemailLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyVoicemailLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var voicemail = $resource("/telephony/:billingAccount/voicemail/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        getSettings: {
            method: "GET",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings",
            cache: cache
        },
        setSettings: {
            method: "PUT",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings",
            interceptor: interceptor
        },
        changePassword: {
            method: "POST",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings/changePassword",
            interceptor: interceptor
        },
        getNumbersSettings: {
            method: "GET",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings/voicemailNumbers"
        }
    });

    voicemail.resetCache = function () {
        cache.removeAll();
    };

    voicemail.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return voicemail;
});
