"use strict";

angular.module("ovh-api-services").service("VrackDedicatedServerLexi", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackDedicatedServerLexi");
    var queryCache = $cacheFactory("VrackDedicatedServerLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackDedicatedServer = $resource("/vrack/:serviceName/dedicatedServer/:dedicatedServer", {
        serviceName: "@serviceName",
        dedicatedServer: "@dedicatedServer"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/dedicatedServer",
            interceptor: interceptor
        }
    });

    vrackDedicatedServer.resetCache = function () {
        cache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    vrackDedicatedServer.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackDedicatedServer;
});
