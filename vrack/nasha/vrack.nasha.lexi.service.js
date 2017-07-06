"use strict";

angular.module("ovh-api-services").service("VrackNashaLexi", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackNashaLexi");
    var queryCache = $cacheFactory("VrackNashaLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackNasha = $resource("/vrack/:serviceName/nasha/:zpool", {
        serviceName: "@serviceName",
        zpool: "@zpool"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/nasha",
            interceptor: interceptor
        }

    });

    vrackNasha.resetCache = function () {
        cache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    vrackNasha.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackNasha;
});
