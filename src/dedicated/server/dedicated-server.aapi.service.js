angular.module("ovh-api-services").service("DedicatedServerAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedServerAapi");

    var dedicatedServerResource = $resource("/dedicated/server/:serverName", {
        serverName: "@serverName"
    }, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache
        },
        rtm: {
            url: "/dedicated/server/rtm/:type/:period",
            method: "GET",
            serviceType: "aapi",
            isArray: true
        },
        query: {
            url: "/dedicated/server/detail/all",
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: true
        }
    });

    dedicatedServerResource.resetAllCache = function () {
        dedicatedServerResource.resetCache();
    };

    dedicatedServerResource.resetCache = function () {
        cache.removeAll();
    };

    return dedicatedServerResource;
});
