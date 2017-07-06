angular.module("ovh-api-services").service("DedicatedServerInterfaceLexi", function ($resource, $cacheFactory, Vrack) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedServerInterfaceLexiQuery");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
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
        Vrack.Aapi().resetAllCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return resource;
});
