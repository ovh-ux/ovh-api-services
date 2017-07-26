angular.module("ovh-api-services").service("DedicatedNashaAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedNashaAapi");

    var resource = $resource("/dedicated/nasha/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            url: "/dedicated/nasha/:serviceName",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: false
        },
        partitions: {
            url: "/dedicated/nasha/:serviceName/partitions",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: true
        }
    });

    resource.resetAllCache = function () {
        resource.resetCache();
    };

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
});
