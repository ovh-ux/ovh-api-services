"use strict";

angular.module("ovh-api-services").service("VrackDedicatedConnectLexi", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackDedicatedConnectLexi");
    var queryCache = $cacheFactory("VrackDedicatedConnectLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
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
        Vrack.Aapi().resetAllCache();
    };

    vrackDedicatedConnect.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackDedicatedConnect;
});
