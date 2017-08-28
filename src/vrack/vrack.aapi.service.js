angular.module("ovh-api-services").service("OvhApiVrackAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVrackAapi");

    var vrackResource = $resource("/vrack/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            url: "/vracks",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: true
        },
        allowedServices: {
            url: "/vrack/:serviceName/allowedServices",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: false
        },
        services: {
            url: "/vrack/:serviceName/services",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: false
        }
    });

    vrackResource.resetAllCache = function () {
        vrackResource.resetCache();
    };

    vrackResource.resetCache = function () {
        cache.removeAll();
    };

    return vrackResource;
});
