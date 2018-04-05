"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedServerV6", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackDedicatedServerV6");
    var queryCache = $cacheFactory("OvhApiVrackDedicatedServerV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
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
        OvhApiVrack.Aapi().resetAllCache();
    };

    vrackDedicatedServer.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackDedicatedServer;
});
