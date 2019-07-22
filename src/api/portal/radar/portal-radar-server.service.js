angular.module("ovh-api-services").service("OvhApiPortalRadarServer", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPortalRadarServer");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPortalRadarServerAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
