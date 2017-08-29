angular.module("ovh-api-services").service("OvhApiPackXdslHubic", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslHubic");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslHubicAapi");
        },
        Lexi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
});
