angular.module("ovh-api-services").service("PortalRadarServer", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PortalRadarServer");

    return {
        Aapi: function () {
            return $injector.get("PortalRadarServerAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
