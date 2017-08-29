"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailGreetingsLexi", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiTelephonyVoicemailGreetingsLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyVoicemailGreetingsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var voicemailGreetings = $resource("/telephony/:billingAccount/voicemail/:serviceName/greetings/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        download: {
            method: "GET",
            url: "/telephony/:billingAccount/voicemail/:serviceName/greetings/:id/download",
            cache: cache
        },
        move: {
            method: "POST",
            url: "/telephony/:billingAccount/voicemail/:serviceName/greetings/:id/move",
            interceptor: interceptor
        }
    });

    voicemailGreetings.resetCache = function () {
        cache.removeAll();
    };

    voicemailGreetings.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return voicemailGreetings;
});
