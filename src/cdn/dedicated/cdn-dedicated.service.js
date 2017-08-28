angular.module("ovh-api-services").service("OvhApiCdnDedicated", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnDedicated");

    return {
        Lexi: function () {
            return $injector.get("OvhApiCdnDedicatedLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
