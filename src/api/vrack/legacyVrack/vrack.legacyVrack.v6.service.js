"use strict";

angular.module("ovh-api-services").service("OvhApiVrackLegacyVrackV6", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackLegacyVrackV6");
    var queryCache = $cacheFactory("OvhApiVrackLegacyVrackV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
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
        OvhApiVrack.Aapi().resetAllCache();
    };

    vrackLegacyVrack.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackLegacyVrack;
});
