"use strict";

angular.module("ovh-api-services").service("VrackLegacyVrackLexi", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackLegacyVrackLexi");
    var queryCache = $cacheFactory("VrackLegacyVrackLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackLegacyVrack = $resource("/vrack/:serviceName/legacyVrack/:legacyVrack", {
        serviceName: "@serviceName",
        legacyVrack: "@legacyVrack"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/legacyVrack",
            interceptor: interceptor
        }
    });

    vrackLegacyVrack.resetCache = function () {
        cache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    vrackLegacyVrack.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackLegacyVrack;
});
