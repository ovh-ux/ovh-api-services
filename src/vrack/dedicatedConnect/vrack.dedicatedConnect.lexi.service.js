"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedConnectLexi", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackDedicatedConnectLexi");
    var queryCache = $cacheFactory("OvhApiVrackDedicatedConnectLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackDedicatedConnect = $resource("/vrack/:serviceName/dedicatedConnect/:name", {
        serviceName: "@serviceName",
        name: "@name"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/dedicatedConnect",
            interceptor: interceptor
        }
    });

    vrackDedicatedConnect.resetCache = function () {
        cache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    vrackDedicatedConnect.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackDedicatedConnect;
});
