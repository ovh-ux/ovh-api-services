angular.module("ovh-api-services").service("OvhApiTelephonyAliasesLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyAliasesLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyAliasesLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var aliases = $resource("/telephony/aliases/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: cache
        },
        changeContact: {
            method: "POST",
            url: "/telephony/aliases/:serviceName/changeContact",
            interceptor: interceptor,
            isArray: true
        },
        getServiceInfos: {
            method: "GET",
            url: "/telephony/aliases/:serviceName/serviceInfos",
            cache: cache
        },
        setServiceInfos: {
            method: "PUT",
            url: "/telephony/aliases/:serviceName/serviceInfos",
            interceptor: interceptor
        }
    });

    aliases.resetCache = function () {
        cache.removeAll();
    };

    aliases.resetQueryCache = function () {
        queryCache.removeAll();
    };

    aliases.resetAllCache = function () {
        aliases.resetCache();
        aliases.resetQueryCache();
    };

    return aliases;
});
