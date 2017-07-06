"use strict";

angular.module("ovh-api-services").service("TelephonyVoicemailDirectoriesLexi", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("TelephonyVoicemailDirectoriesLexi");
    var queryCache = $cacheFactory("TelephonyVoicemailDirectoriesLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var voicemailDirectories = $resource("/telephony/:billingAccount/voicemail/:serviceName/directories/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        download: {
            method: "GET",
            url: "/telephony/:billingAccount/voicemail/:serviceName/directories/:id/download",
            cache: cache
        },
        move: {
            method: "POST",
            url: "/telephony/:billingAccount/voicemail/:serviceName/directories/:id/move",
            interceptor: interceptor
        }
    });

    voicemailDirectories.resetCache = function () {
        cache.removeAll();
    };

    voicemailDirectories.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return voicemailDirectories;
});
