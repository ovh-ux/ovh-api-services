"use strict";

angular.module("ovh-api-services").service("VrackIpLexi", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackIpLexi");
    var queryCache = $cacheFactory("VrackIpLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackIp = $resource("/vrack/:serviceName/ip/:ip", {
        serviceName: "@serviceName",
        ip: "@ip"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/ip",
            interceptor: interceptor
        }
    });

    vrackIp.resetCache = function () {
        cache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    vrackIp.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackIp;
});
