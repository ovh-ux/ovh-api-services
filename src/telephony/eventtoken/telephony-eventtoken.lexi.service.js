angular.module("ovh-api-services").service("OvhApiTelephonyEventtokenLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiTelephonyEventtokenLexiQuery");
    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var eventtokens = $resource("/telephony/:billingAccount/eventToken", {
        billingAccount: "@billingAccount"
    }, {
        query: { method: "GET", cache: queryCache },
        save: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    eventtokens.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return eventtokens;
});
