"use strict";

angular.module("ovh-api-services").service("OvhApiVrackIpLexi", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackIpLexi");
    var queryCache = $cacheFactory("OvhApiVrackIpLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
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
        OvhApiVrack.Aapi().resetAllCache();
    };

    vrackIp.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackIp;
});
