angular.module("ovh-api-services").service("SmsBlacklistsLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsBlacklistsLexi");
    var queryCache = $cacheFactory("SmsBlacklistsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var blacklistsResource = $resource("/sms/:serviceName/blacklists/:number", {
        serviceName: "@serviceName",
        number: "@number"
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
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    blacklistsResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    blacklistsResource.resetCache = function () {
        cache.removeAll();
    };

    blacklistsResource.resetAllCache = function () {
        this.resetQueryCache();
        this.resetCache();
    };

    return blacklistsResource;
});
