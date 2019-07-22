angular.module("ovh-api-services").service("OvhApiDedicatedServerAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedServerAapi");

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
