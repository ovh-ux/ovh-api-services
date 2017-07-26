angular.module("ovh-api-services").service("TelephonyScreenListsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyScreenListsLexi");
    var queryCache = $cacheFactory("TelephonyScreenListsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var screenListResource = $resource("/telephony/:billingAccount/screen/:serviceName/screenLists/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
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
            cache: cache
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    screenListResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return screenListResource;
});
