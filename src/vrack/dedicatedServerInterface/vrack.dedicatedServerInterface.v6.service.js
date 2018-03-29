angular.module("ovh-api-services").service("OvhApiDedicatedServerInterfaceV6", function ($resource, $cacheFactory, OvhApiVrack) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedServerInterfaceV6Query");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
            return response;
        }
    };

    var resource = $resource("/vrack/:serviceName/dedicatedServerInterface/:dedicatedServerInterface", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        details: {
            method: "GET",
            cache: queryCache,
            url: "/vrack/:serviceName/dedicatedServerInterfaceDetails",
            params: {
                serviceName: "@serviceName"
            },
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache,
            isArray: false
        },
        post: {
            method: "POST",
            interceptor: interceptor,
            url: "/vrack/:serviceName/dedicatedServerInterface"
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
        OvhApiVrack.Aapi().resetAllCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return resource;
});
